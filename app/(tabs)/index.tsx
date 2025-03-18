import React,{useState} from 'react'
import { StyleSheet, View, Image,Alert,Button } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import * as ImagePicker from "expo-image-picker";

export default function HomeScreen() {

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    // Pedir permissão
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão negada", "Você precisa permitir o acesso à galeria.");
      return;
    }

    // Abrir a galeria
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    // Se o usuário escolheu uma imagem, atualiza o estado
    if (result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
    
  };

  return (
    <View style={styles.container}>
      <Button title="Abrir Galeria" onPress={pickImage} />
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      )}
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


/*
import React, { useState } from "react";
import { View, Image, TouchableOpacity, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import{Link,useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async (fromCamera: boolean) => {
    // Solicita permissão para acessar a galeria ou câmera
    const { status } = fromCamera
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permissão negada", "Você precisa conceder permissão.");
      return;
    }

    // Abre galeria ou câmera
    const result = fromCamera
      ? await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 0.8,
          
        })
      : await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 0.8,
          aspect:[4,3]
        });

    if (!result.canceled && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  //Rotas Entre Telas
  const router = useRouter();
  const handleNavigation = () => {
    Alert.alert("Aviso", "Fui clicado!", [
      { text: "OK", onPress: () => router.push("/login") },
    ]);

  };


  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}

      <View style={styles.buttonContainer}>
     
        <TouchableOpacity style={styles.button} 
        onPress={() => pickImage(false)}>
          <Ionicons name="warning" size={30} color="white" />
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.button}
        onPress={handleNavigation}
        >
          
          <Ionicons name="arrow-forward" size={30} color="white" />
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
   
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },
});
*/