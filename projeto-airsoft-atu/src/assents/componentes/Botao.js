import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

const Botao = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
 
});

export default Botao;
