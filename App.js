import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CalculatorScreen from './CalculatorScreen';
import GraphReader from './GraphReader';
import TopologyIndices from './TopologyIndices';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
        <Stack.Screen name="Manuel Hesaplayıcı" component={CalculatorScreen} />
        <Stack.Screen name="Graf Okuyucu" component={ GraphReader } />
        <Stack.Screen name="Topolojik İndeksler" component={TopologyIndices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
