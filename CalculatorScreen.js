import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const CalculatorScreen = ({ navigation }) => {
  const [nodeCount, setNodeCount] = useState('');
  const [matrixInput, setMatrixInput] = useState([]);

  const handleNodeCountChange = (text) => {
    const count = parseInt(text);
    setNodeCount(count);
    setMatrixInput(Array.from({ length: count }, () => Array(count).fill('')));
  };

  const handleMatrixInputChange = (text, rowIndex, colIndex) => {
    let updatedMatrix = [...matrixInput];
    updatedMatrix[rowIndex][colIndex] = parseFloat(text);
    setMatrixInput(updatedMatrix);
  };

  const handleCalculate = () => {
    console.log("Düğüm Sayısı:", nodeCount);
    console.log("Komşuluk Matrisi:", matrixInput);

    let matrixString = matrixInput.map(row => row.join(' ')).join('\n');
    alert(matrixString);
  };

  const navigateToTopologyIndices = () => {
    navigation.navigate('TopologyIndices', { matrixInput: matrixInput });
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
      <TextInput
        style={styles.inputd}
        placeholder="Düğüm Sayısını Giriniz"
        value={nodeCount.toString()}
        onChangeText={handleNodeCountChange}
        keyboardType="numeric"
      />
      {nodeCount > 0 && renderMatrixInput()}
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
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: 40,
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
