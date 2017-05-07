import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/index';



class MainScreen extends Component {
  static route = {
    styles: {
      gestures: null,
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Criado no State'
    };
  }

  async componentWillMount() {
    const { mainActions } = this.props;
    await mainActions.sayHello();
    await this.setState({
      msg: this.props.mainState.msg.hello
    });
  }

  render() {
    const { msg } = this.state;
    return (
      <View>
        <Text>{msg}</Text>
        <Button
          title="PhotoScreen"
          onPress={() => {
            this.props.navigator.push('photo');
          }}
        />
        <View style={{ margin: 5 }} />
        <Button
          title="Gallery"
          onPress={() => {
            this.props.navigator.push('listClasses');
          }}
        />
        <View style={{ margin: 5 }} />
        <Button
          title="Cadastrar Aula"
          onPress={() => {
            this.props.navigator.push('createClass');
          }}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    mainState: state.main // dá acesso ao que é atualizado pelos REDUCERS, via PROPS
  }),
  dispatch => ({
    mainActions: bindActionCreators(actions, dispatch) // dá acesso as funções no arquivo INDEX de actions/index
  })
)(MainScreen);
