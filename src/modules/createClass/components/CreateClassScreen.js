import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/index';

import { styles } from './../../../styles/createClass/style';

class CreateClassScreen extends Component {
  static route = {
    styles: {
      gestures: null,
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Criado no State ClassScreen',
      horaInicio: '',
      horaFim: '',
      diaSemana: '',
      nomeAula: ''
    };
  }

  async componentWillMount() {
    const { createClassActions } = this.props;
    await createClassActions.sayHello();
    await this.setState({
      msg: this.props.createClassState.msg.hello
    });
  }
  onSubmit() {
    const { horaInicio, horaFim, diaSemana, nomeAula } = this.state;
    if( horaInicio && horaFim && diaSemana && nomeAula) {
      const { createClassActions } = this.props;
      createClassActions.saveClass({ horaInicio, horaFim, diaSemana, nomeAula });

    } else {
      alert('Todos os campos devem ser preenchidos');
    }
  }

  render() {
    const { msg, horaInicio, horaFim, diaSemana, nomeAula } = this.state;
    return (
      <View>
        <Text>{msg}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            onChangeText={horaInicio => this.setState({ horaInicio })}
            placeholder=" Horário de Inicio"
            autoCapitalize="none"
            autoCorrect={false}
            value={horaInicio}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            onChangeText={horaFim => this.setState({ horaFim })}
            placeholder="Horario Final"
            autoCapitalize="none"
            value={horaFim}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            onChangeText={diaSemana => this.setState({ diaSemana })}
            placeholder="Dia Da Semana"
            autoCapitalize="none"
            value={diaSemana}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            onChangeText={nomeAula => this.setState({ nomeAula })}
            placeholder="Nome do Curso"
            autoCapitalize="none"
            value={nomeAula}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity style={styles.loginButtonContainer} onPress={() => console.log('State', this.state)}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>Cadastrar Aula</Text>
          </View>
        </TouchableOpacity>
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
