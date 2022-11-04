import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';

const Cadastro = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
 
  useEffect(() => {
    if (item) {
      setNome(item.nome);
      setApelido(item.apelido);
      setDataNascimento(item.dataNascimento);
      setSexo(item.sexo);
      setEmail(item.email);
      setSenha(item.senha);
      
    }
  }, [item]);

  const handleRegister = () => {
    insertCadastro({
      nome: nome,
      apelido: apelido,
      dataNascimento: dataNascimento,
      sexo: sexo,
      email: email,
      senha: senha,
      
    }).then((res) => {
      console.log(res);
      navigation.goBack();

      if (res) {
        Alert.alert('Atenção', 'Usuário cadastrado com sucesso!', [
          { test: 'OK', onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert(
          'Atençao',
          'Usuário não cadastrado!Tente novamente mais tarde :)'
        );
      }
    });
  };

return(

<View style={styles.container}>
<Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
<Text style={styles.message}> Realize seu cadastro!</Text>
</Animatable.View>

<ScrollView style={styles.scrollView}>
<Animatable.View animation="fadeInUp" style={styles.containerForm}>

<Text style={styles.title}> Nome: </Text>
<TextInput 
  style={styles.input}
  label="Nome:"
            value={nome}
            onChangeText={(text) => setNome(text)}
  keyboardType='nome-address'/>

<Text style={styles.title}> Apelido: </Text>
<TextInput
  style={styles.input}
  label="Apelido:"
            value={apelido}
            onChangeText={(text) => setApelido(text)}
  keyboardType='apelido-address'/>

<Text style={styles.title}> Data de Nascimento: </Text>
<TextInput
  style={styles.input}
  label="Data de Nascimento:"
            value={dataNascimento}
            onChangeText={(text) => setDataNascimento(text)}
  keyboardType='numeric'/>

<Text style={styles.title}> Sexo: </Text>
<TextInput
  style={styles.input}
  label="Sexo:"
            value={sexo}
            onChangeText={(text) => setSexo(text)}
  keyboardType='sexo-address'/>

<Text style={styles.title}> Email </Text>
<TextInput
  style={styles.input}
  label="Email:"
            value={email}
            onChangeText={(text) => setEmail(text)}
  keyboardType='email-address'/>

<Text style={styles.title}> Senha </Text>
<TextInput
  style={styles.input}
  label="Id:"
            value={senha}
            onChangeText={(text) => setSenha(text)}
  keyboardType='numeric'/>


<TouchableOpacity style={styles.buttonCadastrar}>
  <Text style={styles.buttonTextCadastrar}>Cadastrar</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonCancelar}>
  <Text style={styles.buttonTextCancelar}> Cancelar </Text>
</TouchableOpacity>

</Animatable.View>
</ScrollView>
</View>

);
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
      backgroundColor: '#f0870c'
    },
    containerHeader:{
      marginTop: '12%',
      marginBottom: '8%',
      paddingStart:'5%',
    },
    message:{
      fontSize: 28,
      fontWeight: 'bold',
      color:'#fff'
    },
    containerForm:{
      backgroundColor: '#fff',
      flex:1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart:'3%',
      paddingEnd:'3%',
  },
    title:{
      fontSize: 20,
      marginTop: 28,
    },
    input:{
      borderBottomWidth: 1,
      height: 30,
      marginBottom: 12,
      fontSize: 10,
    },
    buttonCadastrar:{
      backgroundColor:'#f0870c',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent:'center',
      alignItems: 'center',
    },
    buttonCancelar:{
      backgroundColor:'#f0870c',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent:'center',
      alignItems: 'center',
    },
    buttonTextCadastrar:{
      color:'#fff',
      fontSize: 18,
      fontWeight:'bold',  
    },
    buttonTextCancelar:{
      color:'#343a40',
      fontSize: 18,
      fontWeight:'bold',  
    },
    scrollView: {
    backgroundColor: '#f0870c',
    marginHorizontal: 10,
  },
    
  })
  
export default Cadastro;