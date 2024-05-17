import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CalculatorScreen from './CalculatorScreen';
import TopologyIndices from './TopologyIndices'; // Ekledik

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Ekran' }} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ title: 'Manuel Hesaplayıcı' }} />
        <Stack.Screen name="TopologyIndices" component={TopologyIndices} options={{ title: 'Topology Indices' }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
