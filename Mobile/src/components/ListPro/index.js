import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
 
export default function ListPro({data}){

    

    return (
  
            <View style = {styles.container}>
                <Text style ={styles.text}>{data.nome}</Text>
                
            </View>
            
     
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    text:{
        fontSize: 14,
        color: "#222",
    },
    LeftAction :{
        backgroundColor : '#2dd108',
        justifyContent: 'center',
        flex : 1,
    },
    textLeftAction : {
        padding: 20,
        color: '#FFFF',
        fontSize: 16,

    },
    RightActionn :{
        backgroundColor : '#bd0606',
        justifyContent: 'center',
        textAlign: 'right',
        
    },
    textRightActionn : {
        padding: 20,
        color: '#FFFF',
        fontSize: 16,

    }
})