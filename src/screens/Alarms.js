import * as React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Alarms({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button vertical onPress={() => navigation.navigate('Tasks')}>
                <Icon name="apps" />
                <Text>Apps</Text>
              </Button>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Tasks')}
        />
      </View>
    );
  }