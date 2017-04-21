import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/index';

import Camera from 'react-native-camera';


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
    this.takePicture = this.takePicture.bind(this);
  }

  async componentWillMount() {
    const { mainActions } = this.props;
    await mainActions.sayHello();
    await this.setState({
      msg: this.props.mainState.msg.hello
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text
            style={styles.capture}
            onPress={this.takePicture}
          > [CAPTURE] aaa </Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    this.camera.capture({ metadata: options })
      .then(data => console.log('data foto', data))
      .catch(err => console.error('error foto', err));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default connect(
  state => ({
    mainState: state.main // dá acesso ao que é atualizado pelos REDUCERS
  }),
  dispatch => ({
    mainActions: bindActionCreators(actions, dispatch) // dá acesso as funções no arquivo INDEX
  })
)(MainScreen);
