import { StyleSheet, View, Image ,TouchableOpacity,Text, TextInput} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';


export default function Login(){
return(
    <View  style={[styles.container]}>
        <Image 
          source={require('@/assets/images/multa.png')} 
          style={[styles.imageTopo,{opacity:0.5}]} 
          
        />
        {/* Adicionando a imagem na tela inicial */}
        <Image 
          source={require('@/assets/images/logotipo1.jpg')} 
          style={styles.image} 
        />
       
        <Text style={{fontSize:18}}>OTP {"\n"}  
        </Text>
        <Text style={{justifyContent:'center',fontSize:15}}>Enviamos um código,
        por favor verifique a sua caixa de sms</Text>
        <View  style={styles.row}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <View style={styles.squareSeparador} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
       
      </View>
      <Text style={{position:'absolute',top:470,color:'#87888B'}}>Enviar outro em:0:59</Text>
<TouchableOpacity style={styles.bottom}
onPress={()=>alert("Confirmado")}>
    <Text style={[styles.bottomText]}>Confirmar</Text>
  
</TouchableOpacity>
    </View>
);
}
const styles=StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff', // Define o fundo da tela inteira
        justifyContent: 'center', // Centraliza os itens verticalmente
        alignItems: 'center' // Centraliza os itens horizontalmente
      },

      //Logotipo
      image: {
        marginTop:-15,
        width: 470, 
        height: 100,
       
      },
        //Imagem Topo
        imageTopo: {
          marginTop:-130,
          width: 350, 
          height: 200
        },
      bottom:{
        backgroundColor:'#1786F2',
        textAlign:'center',
        color:'green',
        fontSize:20,
        width:300,
        height:50,
        marginTop:150,
        borderRadius:7
      },
      bottomText: {
        textAlign: 'center', // Centraliza o texto dentro do próprio elemento
        color: '#fff', // Cor do texto
        fontSize: 20, // Tamanho do texto
        fontWeight: 'bold', // Negrito opcional
        marginTop:10
      },
       //Texto Dentro do Input
       
      input:{
        color:'black',
        fontSize: 25,
        borderRadius:4,
       marginTop:5,
       borderColor:'Black',
       borderWidth:2,
       width:40,
       height:43
      },
      row: {
       
        position: 'absolute', 
        top: '55%',
        flexDirection: 'row', // inputs lado a lado
        justifyContent: 'center', // Centralização dos Elementos
        alignItems: 'center', // Alinha os itens ao centro
        gap: 10, // Espaço entre os quadrados 
        marginBottom:1
      },
    
      
      square: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 4, // Metade da largura/altura para um círculo perfeito
        marginBottom: -45,
        borderStyle:'solid' ,
        borderColor:'black',
        borderWidth:2,
       
      },
      squareSeparador:{
        width: 18,
        height: 10,
        backgroundColor: 'white',
        borderRadius: 4, // Metade da largura/altura para um círculo perfeito
        marginBottom: -5,
        borderStyle:'solid' ,
        borderColor:'black',
        borderWidth:2,
      }
})