import React, { useEffect, useState } from 'react';
import {View, Image,Text, StyleSheet,TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Icon } from 'react-native-elements'
import avatar from "../../assets/avatar.jpeg"
import api from '../service/api'
import ListaItem from '../components/ListaItem';





export default function Index({ navigation }) {
    const [user, setUser] = useState('')
    const [notas, setNotas] = useState('')
    
    async function listaNotas(){
      const notas = await api.get('/notas')
      console.log(notas.data)
      if(notas.status == 200){
        setNotas(notas.data)
        
      }else{
        let msgError = response.data;
        console.log(msgError.mensagem);
      }
    }

   
    useEffect(() => {    
      if(!notas){
        listaNotas()
        
      
      }
      AsyncStorage.getItem('@user').then(user => {
        if(!user){
          navigation.navigate("Login")
        }else{
          
          setUser(JSON.parse(user))
          
         }
      })
    })
     

  
  
    function logoff(){
      AsyncStorage.removeItem('@user'); 
      navigation.navigate('Login')
    }

    function settings(){
      navigation.navigate('Usuario')
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
          <Image source= {avatar} style={[styles.avatar]}></Image>
          </View>
      <View>
        <Text style={styles.Name}> {user.name}</Text>
          <Text>Número de Matricula :{user.ra}</Text>
          <Text>{user.email}</Text>
      </View>
      <View style ={styles.areaLogout}>
        <Icon onPress ={logoff} style={styles.logout} name='logout' /> 
      
       <View style={styles.areaConfig}> 
         <Icon onPress ={settings} style={styles.config} name='cog' type='font-awesome' />
      </View>
      </View>
    </View>
    <View>
      <FlatList
        data = {notas}
        keyExtractor = {item => item._id}
        renderItem = {({item})=> (
        <ListaItem
          data = {item}
         
        />
        )}
        ItemSeparatorComponent = {()=> <Separator/>}
      />
      
      </View>
    </View>
    
   );
 }

  const Separator = () => <View style ={{flex : 0 , height: 1 , backgroundColor: '#DDD'}}></View>

  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center'
    },

    header: {
      marginTop: 30,
      flexDirection: "row",
      paddingVertical: 5,
      width: "100%",
      paddingHorizontal: 10
      
    },

    Name : {  
      fontSize: 30,
      flexDirection : "row",
      
    },

    text : {
      fontSize: 32,
      color: "#000",
    },
    areaLogout: {
      width: 80,
      height: 80,
      marginVertical: "5%",
      
    },

  
  areaConfig: {
    height: 40,
    paddingVertical: 10
  },

    logout : {
      marginVertical:20,
      textAlign :"center"
    },
  
      config: {
      marginVertical: 10
    },
    avatar:{
      width: 80,
      height: 80,
      borderRadius: 75,
      marginVertical: 10,
      marginHorizontal: 10,
  }

  });