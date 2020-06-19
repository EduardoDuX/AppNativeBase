import * as React from 'react';
import { Component, BackHandler } from 'react';
import {  View, StyleSheet, Image } from 'react-native';
import { Text, Button, Form, Input, Label, Item } from 'native-base'

export default class PaginaHome extends Component{
  constructor(props){
    super(props);
    this.state ={
      nome: 'Anonimo',
    };
  }
  render(){
    const { route } = this.props;
  return (
    
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/ifsc-icon.png')} />
      <Text style={styles.paragraph}>
        Bem-vindo ao sistema do IFSC! Selecione entrar no sistema para ir ao seu perfil ou sair para fechar o aplicativo.
      </Text>
            <Item>
              <Label>Usuário: </Label>
              <Input 
              name='user'
              onChangeText={(text) => this.setState({nome: text})}/>
            </Item>
            <Item>
              <Label last>Senha: </Label>
              <Input  
              name='senha'
              secureTextEntry
              onChangeText={(text) => this.setState({matricula: text})}/>
           </Item>
      <Button primary rounded
        onPress={() =>
          this.props.navigation.navigate('Perfil', {
            nome: this.state.nome,
            matricula: '1234567',
          })
        }
      >
      <Text>
        Entrar no sistema
      </Text>
      </Button> 
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'white',
    flex: 1,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
});
