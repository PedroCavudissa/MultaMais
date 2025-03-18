import { Link, Stack } from 'expo-router';
import { StyleSheet ,Image} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: '404 Error!' }} />
     
      
      <ThemedView style={styles.container}>
      <Image 
          source={require('@/assets/images/404.png')} 
          style={styles.image} 
        />
        <ThemedText type="title">Essa Tela Não Existe.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link" >Vá para a Página Inicial!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  link: {
    marginTop: 55,
    paddingVertical:35,
  },
  image:{
    flex:1,
    width:340,
    height:200
  },
  ThemedText:{
    marginTop:1
  }
});
