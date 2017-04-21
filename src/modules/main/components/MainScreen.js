import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from './../actions/index';


export default class MainScreen extends Component {
  // static route = {
  //   navigationBar: {
  //     visible: false,
  //   },
  //   styles: {
  //     gestures: null,
  //   }
  // }

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

// export default connect(
//   state => ({
//     mainState: state.main
//   }),
//   dispatch => ({
//     mainActions: bindActionCreators(actions, dispatch)
//   })
// )(MainScreen);
