import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/index';

class GalleryScreen extends Component {
  static route = {
    styles: {
      gestures: null,
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    };
    this.renderDogs = this.renderDogs.bind(this);
  }

  async componentWillMount() {
    const { galleryActions } = this.props;
    await galleryActions.sayHello();
    await this.setState({
      msg: this.props.galleryState.msg.hello
    });
    console.log('hello', this.props.galleryState.msg.hello);
  }
  renderDogs(msg) {
    console.log('dogs', msg);
    // msg.forEach((dog) => {
    //   console.log('dog', dog.name);
    //   return (<Text>{dog.name}</Text>);
    // });
  }
  render() {
    const { msg } = this.state;
  
    return (
      <View style={{ flex: 1 }}>
        <Text>Galeria de Fotos aqui</Text>
        <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: msg }}
          />
      </View>
    );
  }
}
export default connect(
  state => ({
    galleryState: state.gallery // dá acesso ao que é atualizado pelos REDUCERS
  }),
  dispatch => ({
    galleryActions: bindActionCreators(actions, dispatch) // dá acesso as funções no arquivo INDEX
  })
)(GalleryScreen);
