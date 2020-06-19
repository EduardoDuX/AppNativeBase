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
  Picker
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
        
export default class PaginaDoacao extends Component{
  
    Somar=()=>
  {
    var n1 = parseInt(this.state.campus);
    var n2 = parseInt(this.state.ifsc);
    var total= n1 + n2;
    if (isNaN(total)){
      alert("Digite apenas números por favor!")
    }else{
    alert('O valor total da doação é: '+total+' reais. Agradecemos a colaboração!');
    }
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
    constructor(props){
    super(props);
    this.state = {
      ifsc:0,
      campus:0,
      selected: "key0",
    };
  }
        
        render(){

        return(
          <Container>
        <Content>
        <Card>
          <CardItem>
          <Body>
            <Text style={styles.paragraph}>Gostaria de fazer uma doação?</Text>
          
            <Item>
              <Label floatingLabel>Doar ao IFSC: </Label>
              <Input 
              name='ifsc'
              onChangeText={(text) => this.setState({ifsc: text})}/>
            </Item>
            <Item>
              <Label floatingLabel last>Doar ao seu campus: </Label>
              <Input 
              name='campus'
              onChangeText={(text) => this.setState({campus: text})}/>
            </Item>
            <Item>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Cartão de crédito" value="key0" />
              <Picker.Item label="Boleto" value="key1" />
              <Picker.Item label="Bitcoin" value="key2" />
              <Picker.Item label="Paypal" value="key3" />
              <Picker.Item label="Picpay" value="key4" />
            </Picker>
            </Item>
            <Button full onPress= {this.Somar} style={{marginTop: 20}}>
            <Text>Confirmar Doação</Text>
            </Button>
         
          </Body>
          </CardItem>
          </Card>
          </Content>
          </Container>
        );}
}