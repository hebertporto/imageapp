import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/index';


class MainScreen extends Component {
  static route = {
    styles: {
      gestures: null,
    }
  }

  async componentWillMount() {
    const { mainActions } = this.props;
    await mainActions.sayHello();
    console.log('construcor ! ');
  }

  render() {
    return (
      <View>
        <Text>
          Main Screen
        </Text>
      </View>
    );
  }
}

export default connect(
  state => ({
    mainState: state.main
  }),
  dispatch => ({
    mainActions: bindActionCreators(actions, dispatch)
  })
)(MainScreen);
