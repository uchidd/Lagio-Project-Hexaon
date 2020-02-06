import React from "react";
import { Block, Text } from "galio-framework";
import { StatusBar, StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("screen");

export default class LoginScreen extends React.Component {

  render() {
    return (
      <Block flex middle>
        <Block style={styles.mainLayer}>

        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  mainLayer : {

  }
})