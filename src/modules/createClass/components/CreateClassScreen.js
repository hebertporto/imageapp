import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ListView,
  Picker
 } from 'react-native';

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
      nomeAula: '',
      list: [{ name: 'Osmar' }, { name: 'Xaxaxa' }, { name: 'Kakakaka' }],
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      })
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
  }

  renderSectionHeader(sectionData, sectionID) {
    return (
      <View>
        <Text>{this.getNameOfDay(sectionID)}</Text>
      </View>
    );
  }
  async componentWillMount() {
    const { createClassActions } = this.props;
    await createClassActions.sayHello();
    await createClassActions.fetchHorariosCadastrados();
    await this.setState({
      msg: this.props.createClassState.msg.hello,
      list: this.props.createClassState.cursosCadastrados
    });
  }
  onSubmit() {
    const { horaInicio, horaFim, diaSemana, nomeAula } = this.state;
    if (horaInicio && horaFim && diaSemana && nomeAula) {
      const { createClassActions } = this.props;
      createClassActions.saveClass({ horaInicio, horaFim, diaSemana, nomeAula });

    } else {
      alert('Todos os campos devem ser preenchidos');
    }
  }

  getNameOfDay(day) {
    switch (day) {
      case '0':
        return 'Domingo';
      case '1':
        return 'Segunda';
      case '2':
        return 'Terça';
      case '3':
        return 'Quarta';
      case '4':
        return 'Quinta';
      case '5':
        return 'Sexta';
      case '6':
        return 'Sábado';
      default:
        return 'Dia não encontrado';
    }
  }

  renderRow(item) {
    return <Text>{item.name} - {item.horario} </Text>;
  }

  renderHeader() {
    const { horaInicio, horaFim, diaSemana, nomeAula } = this.state;
    return (
      <View>
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
          <Picker
            selectedValue={this.state.language}
            onValueChange={diaSemana => this.setState({ diaSemana })}
          >
            <Picker.Item label="Segunda" value="2" />
            <Picker.Item label="Terça" value="3" />
            <Picker.Item label="Quarta" value="4" />
            <Picker.Item label="Quinta" value="5" />
            <Picker.Item label="Sexta" value="6" />
            <Picker.Item label="Sábado" value="7" />
            <Picker.Item label="Domingo" value="1" />
          </Picker>
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
      </View>
    );
  }

  render() {
    const ds = this.state.dataSource;
    const list = this.state.list;
    return (
      <View>
        <TouchableOpacity style={styles.loginButtonContainer} onPress={this.onSubmit}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>Cadastrar Aula</Text>
          </View>
        </TouchableOpacity>
        <ListView
          enableEmptySections
          dataSource={ds.cloneWithRowsAndSections(list)}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
          renderHeader={this.renderHeader}
        />
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
