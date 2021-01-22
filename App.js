import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Container, Accordion,Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import TaskScreen from './src/screens/TaskScreen'
import AlarmScreen from './src/screens/AlarmScreen'
import NoteScreen from './src/screens/NoteScreen'

const SStack = createStackNavigator();

const forFade = ({ current }) => ({
  containerStyle: {
    opacity: current.progress,
  },
});

function App() {
  return (
    <Container>
    <NavigationContainer>
      <SStack.Navigator>
        <SStack.Screen name="Tasks" component={TaskScreen} options={{ cardStyleInterpolator: forFade }}/>
        <SStack.Screen name="Alarms" component={AlarmScreen} options={{ cardStyleInterpolator: forFade }}/>
        <SStack.Screen name="Notes" component={NoteScreen}options={{ cardStyleInterpolator: forFade }}/>
      </SStack.Navigator>
    </NavigationContainer>
    </Container>
  );
}

export default App;