import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./logo.png')} 
          style={styles.headerImage} 
        />
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Manuel Hesaplayıcı')}
        >
          <Text style={[styles.buttonText, { fontSize: 17 }]}>Manuel Hesaplayıcı</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Graf Okuyucu')}
        >
          <Text style={[styles.buttonText, { fontSize: 18 }]}>Graf Okuyucu</Text>
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
    height: 80,
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(60,129,130,0.65)',
    marginVertical: 10,
    borderRadius: 10,
    padding: 17,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;
