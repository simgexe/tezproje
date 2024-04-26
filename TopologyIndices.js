// TopologyIndices.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TopologyIndices = ({ navigation }) => {
 return (
    <View style={styles.container}>
      <View style={styles.column}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>Hyper-Wiener</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>Randic Connectivity</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>General Randic Connectivity</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>General Sum-Connectivity</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>Eccentric Connectivity</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>First Zagreb Eccentricity</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>Atom Bond Connectivity</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>Modified Eccentric Connectivity</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>Geometric-Arithmetic</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>Total Eccentricity</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>Average Eccentricity</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, {fontSize: 10}]}>Second Zagreb Eccentricity</Text>
        </TouchableOpacity>
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'oldlace',
 },
 column: {
     flex: 1,
     justifyContent: 'space-around',
     alignItems: 'center',
 },
 button: {
     backgroundColor: '#3C8182',
     borderRadius: 20,
     padding: 10,
     minWidth: 150,
 },
 buttonText: {
     color: '#333',
     textAlign: 'center',
 },
 space: {
     height: 50,
 },
});

export default TopologyIndices;
