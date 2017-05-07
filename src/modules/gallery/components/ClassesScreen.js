import React, { Component, PropTypes } from 'react';

import { View, Text, ListView } from 'react-native';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/index';

class ClassesScreen extends Component {
  static route = {
    styles: {
      gestures: null,
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
    this.renderRow = this.renderRow.bind(this);
  }

  async componentWillMount() {
    const { galleryActions } = this.props;
    await galleryActions.fecthCursos();
    await this.setState({
      list: this.props.galleryState.cursosList
    });
    console.log('state', this.props);
  }

  renderRow(item) {
    return <Text>{item.name} - {this.getNameOfDay(item.dia)} - {item.horario} </Text>;
  }

  getNameOfDay(day) {
    switch (day) {
      case '0':
        return 'Domingo';
      case '1':
        return 'Segunda';
      case '2':
        return 'Terça';
      case '3':
        return 'Quarta';
      case '4':
        return 'Quinta';
      case '5':
        return 'Sexta';
      case '6':
        return 'Sábado';
      default:
        return 'Dia não encontrado';
    }
  }

  render() {
    const ds = this.state.dataSource;
    const list = this.state.list;
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={ds.cloneWithRows(list)}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

ClassesScreen.propTypes = {
  cursosList: PropTypes.array.isRequired,
  galleryState: PropTypes.object
};

ClassesScreen.defaultProps = {
  cursosList: [],
  galleryState: {}
};

export default connect(
  state => ({
    galleryState: state.gallery // dá acesso ao que é atualizado pelos REDUCERS
  }),
  dispatch => ({
    galleryActions: bindActionCreators(actions, dispatch) // dá acesso as funções no arquivo INDEX
  })
)(ClassesScreen);
