import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button, 
  Label,
  Form,
  Item,
  Input,
  Picker,
  Thumbnail,
  Left
} from 'native-base';
import { View, StyleSheet, Image } from 'react-native';
 
const styles = StyleSheet.create({
  paragraph: {
    marginBottom: 0,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default class PaginaPerfil extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
    };
  }
  
  render() {
    const { route } = this.props;
    const { nome, matricula } = route.params;
    
    return (
      <Container>
        <Content>
        <Card>
            <CardItem>
            <Body>
              <Left>
                <Thumbnail 
                style={{flex: 1, justifyContent: "center", alignItems:"center", 
                size: '100'}} 
                source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}} />
                <Text>{ nome }</Text>
                <Text note>Estudante</Text>
              </Left>
            </Body>
            </CardItem>
            </Card>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.paragraph}>
                  Bem vindo {nome}! Sua matrícula é: {matricula}
                </Text>
                <Button
                  full
                  onPress={() =>
                  this.props.navigation.navigate('Notas', { notas: matricula}) }>
                  <Text>Ver Notas</Text>
                </Button>
                <Button
                  full
                  style = {{marginTop:5}}
                  success
                  onPress={() => this.props.navigation.navigate('Tarefas')}>
                  <Text>Enviar tarefa</Text>
                </Button>
                <Button
                  full
                  style = {{marginTop:5}}
                  onPress={() => this.props.navigation.navigate('Doacao')}>
                  <Text>Gostaria de fazer uma doação?</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
          <CardItem>
          <Body>
          <Text style={styles.paragraph}>Tem alguma dúvida? Acesse o fórum</Text>
            <Button success
              full
              style = {{marginTop:5}}
              onPress={() => this.props.navigation.navigate('Forum', { 
                screen: 'Tópicos',
                params: {gambiarra: 'gambiarraparafuncionar'},
              })}>
            <Text>Fórum</Text>
            </Button> 
            <Text style={styles.paragraph}>Este fórum é destinado para discussões relacionadas ao seu curso</Text>
            </Body>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
    );
  }
}
