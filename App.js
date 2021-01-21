import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import TaskScreen from './src/screens/TasksScreen'
import AlarmsScreen from './src/screens/Alarms'

const Stack = createStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tasks" component={TaskScreen} />
        <Stack.Screen name="Alarms" component={AlarmsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;