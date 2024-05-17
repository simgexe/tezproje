// TopologyIndices.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import wiener from './wiener';
import hyperwiener from './hyper-wiener';
import randicconnectivity from './randic-connectivity';
import generalrandicconnectivity from './general-randic';

const TopologyIndices = ({ route }) => {
  const { matrixInput } = route.params;

  const handleWienerPress = () => {
    if (!matrixInput || matrixInput.length === 0) {
      Alert.alert('Hata', 'Matris verisi eksik veya hatalı.');
      return;
    }

    const sonuc = wiener(matrixInput);
    Alert.alert('Wiener İndeksi', `Sonuç: ${sonuc}`);
  };

  const handleHyperWienerPress = () => {
    if (!matrixInput || matrixInput.length === 0) {
      Alert.alert('Hata', 'Matris verisi eksik veya hatalı.');
      return;
    }

    const sonuc = hyperwiener(matrixInput);
    Alert.alert('Hyper Wiener İndeksi', `Sonuç: ${sonuc}`);
  };

  const handleRandicConnectivityPress = () => {
    if (!matrixInput || matrixInput.length === 0) {
      Alert.alert('Hata', 'Matris verisi eksik veya hatalı.');
      return;
    }

    const sonuc = randicconnectivity(matrixInput);
    Alert.alert('Randić Connectivity İndeksi', `Sonuç: ${sonuc}`);
  };
  const handleGeneralRandicConnectivityPress = () => {
    if (!matrixInput || matrixInput.length === 0) {
      Alert.alert('Hata', 'Matris verisi eksik veya hatalı.');
      return;
    }

    const sonuc = generalrandicconnectivity(matrixInput);
    Alert.alert('General Randic Connectivity İndeksi', `Sonuç: ${sonuc}`);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={handleWienerPress}>
            <Text style={styles.buttonText}>Wiener</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleHyperWienerPress}>
            <Text style={styles.buttonText}>Hyper Wiener</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRandicConnectivityPress}>
            <Text style={styles.buttonText}>Randic Connectivity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleGeneralRandicConnectivityPress}>
            <Text style={styles.buttonText}>General Randic Connectivity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>General Sum Connectivity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>First Zagreb</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Second Zagreb</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Atom Bond Connectivity</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Geometric-Arithmetic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Eccentric Connectivity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Modified Eccentric Connectivity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Total Eccentricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>First Zagreb Eccentricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Second Zagreb Eccentricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Third Zagreb Eccentricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
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
    backgroundColor: 'oldlace',
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
    backgroundColor: '#3C8182',
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
