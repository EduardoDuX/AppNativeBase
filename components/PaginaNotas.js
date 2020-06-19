import React, { Component } from 'react';
import { Container, Header, Content, Badge, Text, Icon, Label, Card, Button, CardItem,View } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  badge: {
  marginLeft: 10,
  },
  texto: {
    marginLeft: 10,
  fontWeight: 'bold',
  },
})

export default class PaginaNotas extends Component {
  constructor(props){
    super(props);
    this.state = {
      notas: [10, 10, 9, 8, 7, 6, 10],
      estado: '',
      filtrado: [],
      mostrarEstado: false,
      
    };
  }
  

  Aprovado = () => {
    var notas = this.state.notas;
    this.setState({mostrarEstado: true});
    for (var i = 0; i < notas.length; i++){
        if(notas[i] < 6){
          this.setState({estado: 'Reprovado'});
          break;
        }else{
          this.setState({estado: 'Aprovado!'})
          continue;
      }
    }
  }

  Filtrar = () => {
    var notas = this.state.notas;
    var novo = notas.filter((valor) => {return valor < 6});
    this.setState({filtrado: novo});
  }

  componentDidMount(){
        this.Filtrar();
    }
  
  render() {
    
    return (
      <Container>
        <Content>
        <Card> 
          <CardItem>      
          <Text style={styles.texto}> Português:</Text>
          <Badge style={styles.badge} primary>
            <Text>{this.state.notas[0]}</Text>         
          </Badge>
          </CardItem>
          <CardItem> 
          <Text style={styles.texto}> Matemática:</Text>
          <Badge style={styles.badge} primary>
            <Text>{this.state.notas[1]}</Text>
          </Badge>
          </CardItem>
          <CardItem> 
          <Text style={styles.texto}> Química:</Text>
          <Badge style={styles.badge} primary>
            <Text>{this.state.notas[2]}</Text>
          </Badge>
          </CardItem>
          <CardItem> 
          <Text style={styles.texto}> Física:</Text>
          <Badge style={styles.badge} primary>
            <Text>{this.state.notas[3]}</Text>
          </Badge>
          </CardItem>
          <CardItem> 
          <Text style={styles.texto}> Biologia:</Text>
          <Badge style={styles.badge} primary>
          <Text>{this.state.notas[4]}</Text>
          </Badge>
          </CardItem>
          <CardItem>
          <Text style={styles.texto}> Inglês:</Text>
          <Badge style={styles.badge} primary>
            <Text>{this.state.notas[5]}</Text>
          </Badge>
          </CardItem>

        
          <CardItem>
          <Text style={styles.texto}>Estado atual: {this.state.estado}</Text></CardItem>
          <CardItem>
          { this.state.mostrarEstado && 
          <Text style= {styles.texto}>
          Quantia de notas a serem recuperadas:     
          {this.state.filtrado.length}</Text>}
          </CardItem>
        
         
          <Button primary 
          style={{marginTop: 20}} 
          full onPress ={this.Aprovado}>
          <Text>Revelar Estado</Text>
          </Button>
          
          </Card>
        </Content>
      </Container>
    );
  }
}