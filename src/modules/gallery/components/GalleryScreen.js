import React, { Component, PropTypes } from 'react';

import { View, Text, ListView } from 'react-native';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/index';

import ItemGallery from '../../../components/ItemGallery';

class GalleryScreen extends Component {
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
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      })
    };
    this.renderRow = this.renderRow.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
  }

  async componentWillMount() {
    const { galleryActions } = this.props;
    await galleryActions.fecthCursos();
    await this.setState({
      list: this.props.galleryState.cursosList
    });

  }

  renderRow(item) {
    return <ItemGallery item={item} />;
  }

  renderSectionHeader(sectionData, sectionID) {
    return (
      <View>
        <Text>{sectionID}</Text>
      </View>
    );
  }
  
  render() {
    const ds = this.state.dataSource;
    const list = this.state.list;
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={ds.cloneWithRowsAndSections(list)}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
        />
      </View>
    );
  }
}

GalleryScreen.propTypes = {
  cursosList: PropTypes.array.isRequired,
  galleryState: PropTypes.object
};

GalleryScreen.defaultProps = {
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
)(GalleryScreen);
