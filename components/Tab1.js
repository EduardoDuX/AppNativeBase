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
import CriarTopico from './CriarTopico';

export default class Topicos extends Component {

   Responder (topico) {
    this.setState({responder : true})
  }

  constructor(props){
    super(props);
    this.state = {

      
    };
  }

  render(){
    const { route } = this.props;
    const { materia, conteudo, mostrar } = route.params;
    
    return(
      <Container>
        <Content>
        { mostrar && 
        <CriarTopico nome='Você' materia={materia} conteudo={conteudo}/>
        }
          <CriarTopico nome='Joãozinho' materia='Matematica' conteudo='Existe algum macete para matrizes?'/>
          <CriarTopico nome='Maria' materia= 'Química' conteudo='Como faço para fazer cáclulo estequiométrico?'/>
        </Content>
      </Container>
    );
  }
}