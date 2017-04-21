import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

import { Router } from '../../../routers/Routers';


class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalContent: null
    };
  }

  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar barStyle="light-content" />
        <StackNavigation
          id="master"
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: 'blue',
              tintColor: '#ffffff',
              title: 'PhotoApp'
            }
          }}
          initialRoute={Router.getRoute('main')}
        />
      </NavigationProvider>
    );
  }
}

export default connect(
  state => ({
    navState: state.navigator
  }),
  dispatch => ({
    navActions: bindActionCreators(actions, dispatch)
  }))(Navigator);
