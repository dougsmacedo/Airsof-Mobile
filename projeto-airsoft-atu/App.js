import React, { useState } from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './src/Contexts/UserContext';
import Main from './src/Navigations/Main';
import Apresentacao from './src/Pages/Apresentacao';
import PaginaInicial from './src/Pages/PaginaInicial';
import Sobre from './src/Pages/Sobre';
import Foto from './src/Pages/Foto';

const App = () =>{
  
    return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#343a40" barStyle= "linght-content"/>
        <Main />
      </NavigationContainer>
    </UserProvider>
    );
  };

export default App;

/*Realizado import UserProvider e inserido no retorn*/