import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/index';

import Camera from 'react-native-camera';


class PhotoScreen extends Component {
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
    const { photoActions } = this.props;
    await photoActions.sayHello();
    await this.setState({
      msg: this.props.photoState.msg.hello
    });
  }

  render() {
    const { msg } = this.state;
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
          > {msg} </Text>
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
    flex: 0.1,
    flexDirection: 'row',
  },
  container2: {
    flex: 0.2,
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
    photoState: state.photo // dá acesso ao que é atualizado pelos REDUCERS
  }),
  dispatch => ({
    photoActions: bindActionCreators(actions, dispatch) // dá acesso as funções no arquivo INDEX
  })
)(PhotoScreen);
