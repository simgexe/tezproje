import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import wiener from './wiener';
import hyperwiener from './hyper-wiener';
import randicconnectivity from './randic-connectivity';
import generalrandicconnectivity from './general-randic';
import generalsumconnectivity from './general-sum';
import firstzagreb from './first-zagreb';
import secondzagreb from './second-zagreb';
import atombondconnectivity from './atom-bond-connectivity';
import geometricarithmetic from './geometric-arithmetic'; 
import eccentricconnectivity from './eccentric-connectivity'; 
import modifiedEccentricConnectivity from './modified-eccentric';
import totalEccentricity from './total-eccentricity';
import firstZagrebEccentricity from './first-zagreb-eccentricity';
import secondZagrebEccentricity from './second-zagreb-eccentricity';
import thirdZagrebEccentricity from './third-zagreb-eccentricity';
import averageEccentricity from './average-eccentricity';

const TopologyIndices = ({ route }) => {
  const { matrixInput, alfa } = route.params;

  const handlePress = (calculateFunction, indexName) => {
    if (!matrixInput || matrixInput.length === 0) {
      Alert.alert('Hata', 'Matris verisi eksik veya hatalı.');
      return;
    }

    const sonuc = calculateFunction(matrixInput);
    Alert.alert(`${indexName} İndeksi`, `Sonuç: ${sonuc}`);
  };

  const handleRandicCalculation = () => {
    const sonuc = generalrandicconnectivity(matrixInput, alfa);
    Alert.alert('General Randic İndeksi', `Sonuç: ${sonuc}`);
  };

  const handleSumCalculation = () => {
    const sonuc = generalsumconnectivity(matrixInput, alfa);
    Alert.alert('General Sum İndeksi', `Sonuç: ${sonuc}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./logo.png')} // Görselin doğru yolu burada olmalı
          style={styles.headerImage} 
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(wiener, 'Wiener')}>
            <Text style={styles.buttonText}>Wiener</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(hyperwiener, 'Hyper Wiener')}>
            <Text style={styles.buttonText}>Hyper Wiener</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(randicconnectivity, 'Randic Connectivity')}>
            <Text style={styles.buttonText}>Randic Connectivity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRandicCalculation}>
            <Text style={styles.buttonText}>General Randic Connectivity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSumCalculation}>
            <Text style={styles.buttonText}>General Sum Connectivity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(firstzagreb, 'First Zagreb')}>
            <Text style={styles.buttonText}>First Zagreb</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(secondzagreb, 'Second Zagreb')}>
            <Text style={styles.buttonText}>Second Zagreb</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(atombondconnectivity, 'Atom Bond Connectivity')}>
            <Text style={styles.buttonText}>Atom Bond Connectivity</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(geometricarithmetic, 'Geometric-Arithmetic')}>
            <Text style={styles.buttonText}>Geometric-Arithmetic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(eccentricconnectivity, 'Eccentric Connectivity')}>
            <Text style={styles.buttonText}>Eccentric Connectivity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(modifiedEccentricConnectivity, 'Modified Eccentric Connectivity')}>
            <Text style={styles.buttonText}>Modified Eccentric Connectivity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(totalEccentricity, 'Total Eccentricity')}>
            <Text style={styles.buttonText}>Total Eccentricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(firstZagrebEccentricity, 'First Zagreb Eccentricity')}>
            <Text style={styles.buttonText}>First Zagreb Eccentricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(secondZagrebEccentricity, 'Second Zagreb Eccentricity')}>
            <Text style={styles.buttonText}>Second Zagreb Eccentricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(thirdZagrebEccentricity, 'Third Zagreb Eccentricity')}>
            <Text style={styles.buttonText}>Third Zagreb Eccentricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(averageEccentricity, 'Average Eccentricity')}>
            <Text style={styles.buttonText}>Average Eccentricity</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: 'rgba(60, 129, 130, 0.65)',
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
  scrollContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flex: 1,
  },
  column: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  button: {
    backgroundColor: 'rgba(60, 129, 130, 0.65)', 
    borderRadius: 20,
    padding: 10,
    minWidth: 150,
    marginVertical: 5,
  },
  buttonText: {
    color: '#333',
    textAlign: 'center',
    fontSize: 10,
  },
  space: {
    height: 20,
  },
});

export default TopologyIndices;
