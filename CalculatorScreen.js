// CalculatorScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const CalculatorScreen = ({ navigation }) => {
  const [nodeCount, setNodeCount] = useState('');
  const [matrixInput, setMatrixInput] = useState('');

  const handleNodeCountChange = (text) => {
    setNodeCount(text);
  };

  const handleMatrixInputChange = (text) => {
    setMatrixInput(text);
  };

  const handleCalculate = () => {
    // Hesaplama işlemleri burada yapılacak
    console.log("Düğüm Sayısı:", nodeCount);
    console.log("Komşuluk Matrisi:", matrixInput);
  };

  const navigateToTopologyIndices = () => {
    navigation.navigate('TopologyIndices'); // 'TopologyIndices' isimli diğer sayfaya yönlendirme
  };

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Düğüm Sayısını Giriniz"
        value={nodeCount}
        onChangeText={handleNodeCountChange}
        keyboardType="numeric"
      />

      
      <TextInput
        style={styles.input}
        placeholder="Hesaplanacak Grafın Komşuluk Matrisini Giriniz"
        value={matrixInput}
        onChangeText={handleMatrixInputChange}
        multiline={true}
        numberOfLines={4}
      />

    
      <TouchableOpacity style={[styles.button, styles.smallButton]} onPress={navigateToTopologyIndices}>
        <Text style={styles.buttonText}>Hesaplanacak topolojik indeksi seçiniz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  button: {
    backgroundColor: 'lightseagreen',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%', // Geniş buton
    alignItems: 'center',
  },
  smallButton: {
    width: '50%', // Küçük buton
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default CalculatorScreen;
