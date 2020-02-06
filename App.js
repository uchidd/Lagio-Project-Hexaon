import React from 'react';
import { Block } from "galio-framework";
import { StatusBar } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render(){
    return(
      <Block flex middle>
        <StatusBar hidden/>
        <LoginScreen/>
      </Block>
    )
  }
}
