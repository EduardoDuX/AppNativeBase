import React from 'react';
import {
    AppLoading
} from 'expo';
import {
    Container,
    Text,
    Item
} from 'native-base';
import * as Font from 'expo-font';
import {
    Ionicons
} from '@expo/vector-icons';
import PaginaPerfil from './components/PaginaPerfil';
import PaginaNotas from './components/PaginaNotas'
import PaginaHome from './components/PaginaHome';
import PaginaTrabalhos from './components/PaginaTrabalhos';
import PaginaForum from './components/PaginaForum';
import PaginaDoacao from './components/PaginaDoacao';

import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({
            isReady: true
        });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading / > ;
        }

        const Stack = createStackNavigator();
        

        return (
          <Container >
            <NavigationContainer>
            <Stack.Navigator initialRouteName = "Página Inicial" >
            <Stack.Screen name = "Página Inicial"
            component = {PaginaHome}/> 
            <Stack.Screen name = "Perfil"
            component = {PaginaPerfil}/> 
            <Stack.Screen name = "Notas"
            component = {PaginaNotas}/> 
            <Stack.Screen name = "Tarefas"
            component = {PaginaTrabalhos}/> 
            <Stack.Screen name = "Forum"
            component = {PaginaForum}/> 
            <Stack.Screen name = "Doacao"
            component = {PaginaDoacao}/> 
            </Stack.Navigator> 
            
            </NavigationContainer> 
            </Container>
        );
    }
}