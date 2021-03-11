import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TaskScreen from "./src/screens/TaskScreen";
import AlarmScreen from "./src/screens/AlarmScreen";
import NoteScreen from "./src/screens/NoteScreen";

const taskNavigator = createStackNavigator();

const forFade = ({ current }) => ({
  containerStyle: {
    opacity: current.progress,
  },
});

function App() {
  return (
    <NavigationContainer>
      <taskNavigator.Navigator>
        <taskNavigator.Screen
          name="Tasks"
          component={TaskScreen}
          options={{ title: "Tarefas", cardStyleInterpolator: forFade }}
        />
        <taskNavigator.Screen
          name="Alarms"
          component={AlarmScreen}
          options={{ title: "Compromissos", cardStyleInterpolator: forFade }}
        />
        <taskNavigator.Screen
          name="Notes"
          component={NoteScreen}
          options={{ title: "Notas", cardStyleInterpolator: forFade }}
        />
      </taskNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;
