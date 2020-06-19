import React, { Component } from 'react';
import { Container, 
  Header, 
  Content, 
  Tab, 
  Tabs, 
  Text, 
  Card, 
  CardItem, 
  Body, 
  Button, 
  Item,  
  Input,
  Label
} from 'native-base';
import { View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  paragraph: {
    marginBottom: 0,
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default class Cadastrar extends Component {

  constructor(){
    super();
    this.state = {
      materia: '',
      conteudo:'',
    };
  }
  render(){
    const { route } = this.props;
    return(
      <Container>
        <Text style={styles.paragraph}>Assim que sua pergunta for enviada alunos e professores poderão ver e respondê-la!</Text>
        <Content padder>
          <Card>
            <CardItem bordered>
            <Body>
            <Item>
              <Label>Matéria: </Label>
              <Input 
              name='materia'
              onChangeText={(text) => this.setState({materia: text})}/>
            </Item>
            <Item>
              <Label>Conteúdo: </Label>
              <Input 
              name='digitar'
              onChangeText={(text) => this.setState({conteudo: text})}/>
            </Item>
            <Item>
              <Button
                full
                style = {{marginTop:5}}
                onPress={() => this.props.navigation.navigate('Tópicos', {
                  materia: this.state.materia,
                  conteudo: this.state.conteudo,
                  mostrar: true,
                })}>
                <Text>Enviar pergunta</Text>
              </Button>
              </Item>
            </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}