import { StyleSheet, View, Image ,TouchableOpacity,Text, TextInput,Alert} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from "expo-router";


export default function Login(){
  const router=useRouter();
  const navegacao = () => {
    Alert.alert("Verifique a sua caixa de SMS", "", [
      { text: "OK", onPress: () => router.push("/codigoOTP") }, 
    ]);
  };

  
return(
    <View  style={[styles.container]}>
        <Image 
          source={require('@/assets/images/multa.png')} 
          style={[styles.imageTopo,{opacity:0.5}]} 
        />
 <ThemedView>
        {/* Adicionando a imagem na tela inicial */}
        <Image 
          source={require('@/assets/images/logotipo1.jpg')} 
          style={styles.image} 
        />
      </ThemedView>
     
      <TextInput style={styles.input}
      placeholder='Digite o seu contacto'
      placeholderTextColor="#000">  
      </TextInput >
<TouchableOpacity style={styles.bottom}
onPress={navegacao}>
    <Text style={[styles.bottomText]}>Gerar Código OTP</Text>
  
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
        marginTop:28,
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
        fontSize: 18,
        borderRadius:5,
       marginTop:5,
       borderColor:'Black',
       borderWidth:2,
       width:300,
       height:50
      }
})