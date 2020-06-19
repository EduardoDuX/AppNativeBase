import React, { Component } from 'react';
import { Container, Header, Content, Tabs, Text} from 'native-base';
import Topicos from './Tab1';
import Cadastrar from './Tab2';
import {
    NavigationContainer
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

 
export default class PaginaForum extends Component {
  

  render() {
    const Tab = createBottomTabNavigator(); 
    return (
      <Container>
      
        <Tab.Navigator 
tabBarOptions={{

  showIcon: false,
  allowFontScaling: true,
  tabStyle: {alignItems: 'center', justifyContent:'center', flex: 1},
  labelStyle: {fontSize: 18, fontWeight: 'bold'}
  
}}>
          <Tab.Screen name="Tópicos" component={Topicos} />
          <Tab.Screen name="Cadastrar" component={Cadastrar} />
        </Tab.Navigator>
        
      </Container>
    );
  }
}