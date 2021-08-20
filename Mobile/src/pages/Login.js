import React, { useState } from 'react';
import {View,Text,Image,StyleSheet,SafeAreaView, TextInput, Touchable,TouchableOpacity} from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import api from '../service/api';
import logo from '../../assets/teste.png'

export default function Login({ navigation }) {
    const [ra,setRa] = useState("2019073840");
    const [pwd, setPwd] = useState("12345");
    
    async function formSubmit(){
      const response = await api.post('/user/validation', {ra,pwd})
  
      if(response.status == 200){
  
        await AsyncStorage.setItem('@user', JSON.stringify(response.data));
        navigation.navigate('Index')
  
      }else{
        let msgError = response.data;
        console.log(msgError.mensagem);
      }
    }
    return (
      <SafeAreaView style = {style.container}>
        <Image source= {logo}></Image>

        <View style={style.from}>
        <Text style = {style.label}>Acesso Restrito</Text>
        <TextInput
        style ={style.input}
        placeholder= "Informe seu RA"
        placeholderTextColor= "#888"
        keyboardType ="numeric"
        maxLength = {10}
        value = {ra}
        onChangeText={setRa}
        />
        
        <TextInput
        style={style.input}
        placeholder = "Informe sua senha"
        placeholderTextColor="#888"
        secureTextEntry ={true}
        maxLength = {14}
        value = {pwd}
        onChangeText = {setPwd}
        />
        
        
        <TouchableOpacity onPress={formSubmit} style={style.button}>
          <Text style={style.TextButton}>Logar</Text>
        </TouchableOpacity>
        
      
        </View>
      </SafeAreaView>
    );
  }

  const style = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
      alignSelf : 'stretch',
      paddingLeft: 120,
      marginRight: 90,
      marginTop: 10

    },
    input: {
      borderWidth:1,
      borderColor: '#DDD',
      paddingHorizontal: 20,
      borderRadius:10,
      height: 45,
      fontSize: 18,
      marginBottom: 30

    },
    label:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 15,
      color: '#555'
    },
    button:{
      backgroundColor:"#3259a8",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10

    },
    TextButton:{
      color: "#FFF",
      fontSize: 20,
      textAlign: "center"

    }
});