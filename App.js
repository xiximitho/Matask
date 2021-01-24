import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Container, Accordion,Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {CheckBox} from 'react-native-paper'
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
    <NavigationContainer>
      <SStack.Navigator>
        <SStack.Screen name="Tasks" component={TaskScreen} options={{ title: 'Tarefas',cardStyleInterpolator: forFade }}/>
        <SStack.Screen name="Alarms" component={AlarmScreen} options={{ title:'Compromissos',cardStyleInterpolator: forFade }}/>
        <SStack.Screen name="Notes" component={NoteScreen}options={{ title:'Notas', cardStyleInterpolator: forFade }}/>
      </SStack.Navigator>
    </NavigationContainer>
  );
}

export default App;