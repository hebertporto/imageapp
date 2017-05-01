import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/index';



class CreateClassScreen extends Component {
  static route = {
    styles: {
      gestures: null,
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Criado no State ClassScreen'
    };
  }

  async componentWillMount() {
    const { createClassActions } = this.props;
    await createClassActions.sayHello();
    await this.setState({
      msg: this.props.createClassState.msg.hello
    });
  }

  render() {
    const { msg } = this.state;
    return (
      <View>
        <Text>{msg}</Text>
      </View>
    );
  }
}

export default connect(
  state => ({
    createClassState: state.createClass // dá acesso ao que é atualizado pelos REDUCERS, via PROPS
  }),
  dispatch => ({
    createClassActions: bindActionCreators(actions, dispatch) // dá acesso as funções no arquivo INDEX de actions/index
  })
)(CreateClassScreen);
