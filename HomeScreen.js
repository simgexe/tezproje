import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
 return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Calculator')}
      >
        <Text style={[styles.buttonText, {fontSize: 17}]}>Manuel Hesaplayıcı</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GraphReader')}
      >
        <Text style={[styles.buttonText, {fontSize: 18}]}>Graf Okuyucu</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'oldlace',
 },
 button: {
    backgroundColor: '#3C8182',
    marginVertical: 10,
    borderRadius: 7,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
 },
 buttonText: {
    color: '#333',
    textAlign: 'center',
 },
});

export default HomeScreen;