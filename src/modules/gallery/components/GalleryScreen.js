import React, { Component } from 'react';

import { View, Text } from 'react-native';

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
      msg: []
    };
    this.renderDogs = this.renderDogs.bind(this);
  }

  async componentWillMount() {
    const { galleryActions } = this.props;
    await galleryActions.sayHello();
    await this.setState({
      msg: this.props.galleryState.msg
    });
  }
  renderDogs(msg){
    console.log('dogs', msg);
    msg.forEach((dog) => {
      console.log('dog', dog.name);
      return ({dog.name});
    });
  }
  render() {
    const { msg } = this.state;
    return (
      <View>
        <Text>Galeria de Fotos aqui</Text>
        <Text>
          {this.renderDogs(msg)}
        </Text>
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
