import * as React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Alarms({ navigation }) {
    return (
      <Container>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Alarms</Text>
      </View>
      <Footer>
        <FooterTab>
        <Button vertical  onPress={() => navigation.push('Tasks')}>
              <Icon name="person" />
              <Text>Tasks</Text>
        </Button>
        <Button vertical active onPress={() => navigation.push('Alarms')}>
              <Icon name="person" />
              <Text>Alarms</Text>
        </Button>
        <Button vertical onPress={() => navigation.push('Notes')}>
              <Icon name="person" />
              <Text>Notes</Text>
        </Button>
          </FooterTab> 
          </Footer>
      </Container>
    );
  }