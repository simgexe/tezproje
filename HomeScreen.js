import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Manuel Hesaplayıcı"
        onPress={() => navigation.navigate('Calculator')}
        color="black" // Buton rengi lightseagreen
        backgroundColor="lightseagreen"
        style={styles.button} // Buton stilini uygula
      />
      <Button
        title="Graf Okuyucu"
        onPress={() => navigation.navigate('GraphReader')}
        color="black"
        backgroundColor="lightseagreen" // Buton rengi lightseagreen
        style={styles.button} // Buton stilini uygula
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'oldlace', // Sayfa arkaplan rengi oldlace
  },
  button: {
    backgroundColor:'lightseagreen',
    marginVertical: 10, 
    borderRadius:7,
    padding:10,
    marginTop: 20,
    alignItems:'center',
  },
});

export default HomeScreen;