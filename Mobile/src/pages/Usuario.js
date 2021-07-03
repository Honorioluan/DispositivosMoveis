import React, { useEffect, useState } from 'react'
import {SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, View, ActivityIndicator, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import avatar from "../../assets/avatar.jpeg"

export default function Usuario({ navigation }) {

    const [user, setUser] = useState('');
    const [nome, setNome] = useState('');
    const [ra, setRa] = useState('');
    const [email, setEmail] = useState('');
    const [passoword, setPassoword]= useState('')
  
    useEffect(() => {    
      AsyncStorage.getItem('@user').then(user => {
        if(!user){
            setRa = user.ra
          navigation.navigate("Login")
        }else{
          setUser(JSON.parse(user))
         }
      })
    })

    function back(){
        navigation.navigate('Index')
    }
    return (
      <SafeAreaView style ={styles.container}>
        <View>
            <Image style={styles.avatar} source= {avatar} PlaceholderContent={<ActivityIndicator/>}></Image>
        </View>

        <View style={styles.form}>

        <TextInput
        style ={styles.input}
        placeholder ="Nome"
        placeholderTextColor = "#888"
        autoCapitalize = "words"
        />

        <TextInput
        style ={styles.input}
        placeholder ="E-mail"
        textContentType = "emailAddress"
        placeholderTextColor = "#888"
        />

        <TextInput
        style ={styles.input}
        placeholder ="Informe seu RA"
        placeholderTextColor = "#888"
        keyboardType = "numeric"
        maxLength = {10}
        value = {ra}
        onChangeText = {setRa}
        />

        <TextInput
        style ={styles.input}
        placeholder ="Informe sua senha"
        placeholderTextColor = "#888"
        secureTextEntry = {true}
        maxLength = {20}
        value = {passoword}
        onChangeText = {setPassoword} 
        />

        <TouchableOpacity style ={styles.button}>
          <Text style ={styles.TextButton}>Salvar</Text>
        </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={back}>
            <Text>Voltar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container :{
        flex:1,
        alignItems: 'center',
        marginTop: 30
    },
    avatar: {
        width: 250,
        height: 250,
        borderRadius: 125,
        marginVertical: 20
      },
      form: {
        alignSelf : 'stretch',
        paddingHorizontal: 30,
        marginTop: 10
      },
      input: {
  
        borderWidth: 1,
        borderColor: "#000",
        paddingHorizontal: 20,
        borderRadius: 6,
        height: 40,
        fontSize: 15,
        marginBottom: 30
  
      },
      label :{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 15,
        color: "#555"
      },
      button: {
        backgroundColor: "#05509b",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10
        
      },
      TextButton: {
        color: '#fff',
        fontSize: 20,
        textAlign: "center"
      }
  
  });