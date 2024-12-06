import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorScreen from './CalculatorScreen';
const GraphReader = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  const [matrixInput,setMatrix]=useState(null);

  const FLASK_API_URL='http://192.168.1.39:5000/process-image';

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled) {
      setImageUri(result.assets[0].uri);
    } 
  };

  const sendImageToFlask =async ()=>{
    if(!imageUri){
      Alert.alert('Lütfen bir resim seçiniz');
      return;
    }
    try{
      const response =await fetch(imageUri);
      const blob =await response.blob();
      const reader =new FileReader();

      reader.onloadend =async ()=>{
        const base64Image =reader.result.split(',')[1];
        const res =await axios.post(FLASK_API_URL,{image:base64Image});
        setMatrix(res.data.adjacency_matrix);
        console.log(res.data.adjacency_matrix);
        Alert.alert('Matris başarıyla alındı');
      };
      reader.readAsDataURL(blob);
      }
      catch(error){
        console.error(error);
        Alert.alert('Bir hata oluştu');
    }
  };
  const navigateToCalculator =()=>{
    if(!matrixInput){
      Alert.alert('Henüz matris oluşturulmadı!');
      return;
    }
    navigation.navigate('CalculatorScreen',{matrixInput:matrixInput});
};

return (
  <View style={styles.container}>
    <Text style={styles.title}>Graph Reader</Text>
    {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    <TouchableOpacity style={styles.button} onPress={pickImage}>
      <Text style={styles.buttonText}>Galeriden Görüntü Seç</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={sendImageToFlask}>
      <Text style={styles.buttonText}>Matrisi Hesapla</Text>
    </TouchableOpacity>
    {matrixInput && (
      <TouchableOpacity style={styles.button} onPress={navigateToCalculator}>
        <Text style={styles.buttonText}>Matrisi CalculatorScreen'e Gönder</Text>
      </TouchableOpacity>
    )}
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
},
button: {
  backgroundColor: '#007BFF',
  padding: 15,
  marginVertical: 10,
  borderRadius: 5,
  width: '80%',
  alignItems: 'center',
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
image: {
  width: 200,
  height: 200,
  resizeMode: 'contain',
  marginBottom: 20,
},
});

export default GraphReader;