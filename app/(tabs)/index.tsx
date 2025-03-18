import { StyleSheet, View, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedView>
        
        <Image 
          source={require('@/assets/images/logotipo1.jpg')} 
          style={styles.image} 
        />
      </ThemedView>
      <View  style={styles.row}>
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff', // Define o fundo da tela inteira
    justifyContent: 'center', // Centraliza os itens verticalmente
    alignItems: 'center' // Centraliza os itens horizontalmente
  },
  image: {
    marginTop:0,
    width: 400, 
    height: 200
  }, 
   row: {
    position: 'absolute', 
    top: '90%',
    flexDirection: 'row', // Circulos lado a lado
    justifyContent: 'center', // Centralização dos Elementos
    alignItems: 'center', // Alinha os itens ao centro
    gap: 20, // Espaço entre os círculos 
    marginBottom: -180
  },
  circle: {
    width: 15,
    height: 15,
    backgroundColor: 'white',
    borderRadius: 50, // Metade da largura/altura para um círculo perfeito
    marginBottom: 1,
    borderStyle:'solid' ,
    borderColor:'black',
    borderWidth:2,
   
  },
});

