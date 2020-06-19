import React, { Component, ScrollView } from 'react';
import { Container,
  Header, 
  Content, 
  Tab, 
  Tabs, 
  Text, 
  Card,
  Button, 
  CardItem,
  Body,
  Left,
  Thumbnail,
  Item,
  Input,
  Label,
} from 'native-base';
import { View, StyleSheet, Image } from 'react-native';

export default class CriarTopico extends Component{

   Responder = () => {
    this.setState({responder : true})
  }

  constructor(props){
    super(props);
    this.state = {
      materia: '',
      conteudo: '',
      responder: false,
      nome: 'Você',
    };
  }
  render(){
    return(
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}} />
              <Body>
                <Text>{this.props.nome}</Text>
                <Text note>Estudante</Text>
              </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Item>
                  <Text>Matéria: {this.props.materia}</Text>
                </Item>
                <Text>
                {this.props.conteudo}
                </Text>
                
            { !this.state.responder  &&
              <Button
                full
                style = {{marginTop:5}}
                onPress = {() => this.Responder()}>
                <Text>Responder pergunta</Text>
              </Button>
            }
              
            { this.state.responder &&         
            <Button disabled success full style = {{marginTop: 5}}>
              <Item>
                <Label style={{marginLeft: 5, color:'white'}}>
                  Responder: 
                </Label>
                <Input/>
              </Item>
            </Button>
            }
            </Body>
            </CardItem>
          </Card>
         
    );
  }
}