import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const CalculatorScreen = ({ navigation }) => {
  const [nodeCount, setNodeCount] = useState('');
  const [matrixInput, setMatrixInput] = useState([]);

  const handleNodeCountChange = (text) => {
    setNodeCount(text);
    setMatrixInput([]); // Düğüm sayısı değiştiğinde matrisi sıfırla
  };

  const handleMatrixInputChange = (text, rowIndex, colIndex) => {
    let updatedMatrix = [...matrixInput];
    updatedMatrix[rowIndex] = updatedMatrix[rowIndex] || [];
    updatedMatrix[rowIndex][colIndex] = text;
    setMatrixInput(updatedMatrix);
  };

  const handleCalculate = () => {
    // Hesaplama işlemleri burada yapılacak
    console.log("Düğüm Sayısı:", nodeCount);
    console.log("Komşuluk Matrisi:", matrixInput);
  
    let matrixString = matrixInput.map(row => row.join(' ')).join('\n');
    alert(matrixString);
  };
  

  const navigateToTopologyIndices = () => {
    navigation.navigate('TopologyIndices'); // 'TopologyIndices' isimli diğer sayfaya yönlendirme
  };

  const renderMatrixInput = () => {
    let inputs = [];
    for (let i = 0; i < parseInt(nodeCount); i++) {
      let row = [];
      for (let j = 0; j < parseInt(nodeCount); j++) {
        row.push(
          <TextInput
            key={`${i}-${j}`}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => handleMatrixInputChange(text, i, j)}
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
      <TextInput
        style={styles.inputd}
        placeholder="Düğüm Sayısını Giriniz"
        value={nodeCount}
        onChangeText={handleNodeCountChange}
        keyboardType="numeric"
      />
      {parseInt(nodeCount) > 0 && renderMatrixInput()}
      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Komşuluk Matrisini Göster</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToTopologyIndices}>
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
    width: 50,
    height: 50,
    borderWidth: 1,
    margin: 5,
    textAlign: 'center',
  },
  inputd: {
    width: '80%',
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
    backgroundColor: 'lightseagreen',
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
