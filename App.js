import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Text, Button, Image} from 'react-native';
 
export default class Fibonacci extends Component {
  state = {
    n: 0,
    F: 0,
  }
  getNumber = (numero) => {
    this.setState({ n: numero})
  }
  setF = (numero) => {
    this.setState({F: numero})
  }
soma=(numero)=>
{
  var n = parseInt(numero);
  var a = 0, b = 1, t;
  while (n-- > 0) {
    t = b*b;
    a += t;
    b++;
    console.log(t);
  }
  this.setF(a);
}

  render() {
    return (
      <View style={styles.MainContainer} >
        <Image
        style={styles.tinylogo}
        source={require('./assets/espiral.png')}/>  
        <TextInput
          style={styles.entrada}
          placeholder="Informe um número"
          keyboardType="numeric"
          onChangeText={this.getNumber}/>
        <TouchableHighlight 
          style ={styles.botao}>
          <Button 
            title="CALCULAR"
            onPress = {() => this.soma(this.state.n) }/> 
        </TouchableHighlight> 
        <Text
        style={styles.entrada, styles.titulo}>
          A soma dos quadrados dos números  
        </Text>
        <Text
        style={styles.entrada, styles.titulo}>
           de 1 à {this.state.n} é: 
        </Text>
        <Text
        style={styles.entrada, styles.titulo}>
          {this.state.F}
        </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create(
{
  botao: {
    height: 40,
    width:"80%",
    borderRadius:10,
    marginLeft :50,
    marginRight:50,
    marginTop :5
  },
  entrada: {
    borderWidth: 1,
    height: 40,
    margin: 5,
    width: "80%",
    textAlign: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 5,
  },
  tinylogo:{
    width: "55%",
    height: "30%",
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});