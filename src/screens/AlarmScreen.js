import * as React from 'react';
import {Component } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button , Icon, View, Text } from 'native-base';
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
        <Button vertical  onPress={() => navigation.navigate('Tasks')}>
              <Icon type="FontAwesome5" name="tasks" />
              <Text>Tarefas</Text>
        </Button>
        <Button vertical active onPress={() => navigation.navigate('Alarms')}>
              <Icon type="FontAwesome5" name="business-time" />
              <Text>Compromissos</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Notes')}>
              <Icon type="FontAwesome5" name="sticky-note" />
              <Text>Notas</Text>
        </Button>
          </FooterTab> 
          </Footer>
      </Container>
    );
  }