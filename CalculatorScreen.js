import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from 'react-native';

const CalculatorScreen = ({ navigation }) => {
  const [nodeCount, setNodeCount] = useState('');
  const [matrixInput, setMatrixInput] = useState([]);
  const [alfa, setAlfa] = useState('');

  const handleNodeCountChange = (text) => {
    const count = parseInt(text);
    setNodeCount(count);
    setMatrixInput(Array.from({ length: count }, () => Array(count).fill('')));
  };

  const handleMatrixInputChange = (text, rowIndex, colIndex) => {
    let updatedMatrix = [...matrixInput];
    updatedMatrix[rowIndex][colIndex] = parseFloat(text) || 0;
    setMatrixInput(updatedMatrix);
  };

  const handleCalculate = () => {
    console.log("Düğüm Sayısı:", nodeCount);
    console.log("Komşuluk Matrisi:", matrixInput);

    let matrixString = matrixInput.map(row => row.join(' ')).join('\n');
    Alert.alert('Komşuluk Matrisi', matrixString);
  };

  const navigateToTopologyIndices = () => {
    const alfaValue = parseFloat(alfa);
    if (nodeCount <= 0 || matrixInput.some(row => row.some(cell => isNaN(cell))) || isNaN(alfaValue)) {
      Alert.alert('Hata', 'Lütfen geçerli bir düğüm sayısı, matris değerleri ve alfa değeri giriniz.');
      return;
    }
    navigation.navigate('Topolojik İndeksler', { matrixInput: matrixInput, alfa: alfaValue });
  };

  const renderMatrixInput = () => {
    let inputs = [];
    for (let i = 0; i < nodeCount; i++) {
      let row = [];
      for (let j = 0; j < nodeCount; j++) {
        row.push(
          <TextInput
            key={`${i}-${j}`}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => handleMatrixInputChange(text, i, j)}
            value={matrixInput[i][j].toString()}
          />
        );
      }
      inputs.push(
        <View key={`row-${i}`} style={styles.row}>
          {row}
        </View>
      );
    }
    return inputs;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./logo.png')} 
          style={styles.headerImage} 
        />
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.inputd}
          placeholder="Düğüm Sayısını Giriniz"
          value={nodeCount.toString()}
          onChangeText={handleNodeCountChange}
          keyboardType="numeric"
        />
        {nodeCount > 0 && renderMatrixInput()}
        <TextInput
          style={styles.inputd}
          placeholder="Alfa Değerini Giriniz"
          value={alfa}
          onChangeText={text => setAlfa(text.replace(/[^0-9.]/g, ''))}
          keyboardType="number-pad"
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text style={styles.buttonText}>Komşuluk Matrisini Göster</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToTopologyIndices}>
          <Text style={styles.buttonText}>Hesaplanacak topolojik indeksi seçiniz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: 'rgba(60,129,130,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  headerImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: 40,
    textAlign: 'center',
  },
  inputd: {
    width: '60%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'rgba(60,129,130,0.65)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default CalculatorScreen;
