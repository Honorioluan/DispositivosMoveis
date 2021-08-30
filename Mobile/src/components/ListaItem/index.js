import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


 
export default function listaItem({data}){
    
    return (
        <View style = {styles.container}>
            <Text style ={styles.text}>{data.nome_materia}</Text>
            <Text style ={styles.text}>Nota: 1-Bimestre: {data.Bim1}</Text>
            <Text style ={styles.text}>Nota: 2-Bimestre: {data.Bim2}</Text>
            <Text style ={styles.text}>Nota: 3-Bimestre: {data.Bim3}</Text>
            <Text style ={styles.text}>Nota: 4-Bimestre: {data.Bim4}</Text>
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