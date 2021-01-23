import React from 'react';
import {  } from 'react-native';
import { Container, Header, Content, Accordion, Footer, FooterTab, Button, Text, Icon, View , List, Body} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccordionDefault from './NoteList'
import AccordionExample from './NoteList';


export default function Notes({ navigation }) {
    return (
        <Container>
        <AccordionExample/>
      <Footer>
        <FooterTab>
        <Button vertical  onPress={() => navigation.navigate('Tasks')}>
              <Icon type="FontAwesome5" name="tasks" />
              <Text>Tasks</Text>
        </Button>
        <Button vertical  onPress={() => navigation.navigate('Alarms')}>
              <Icon type="FontAwesome5" name="business-time" />
              <Text>Alarms</Text>
        </Button>
        <Button vertical active onPress={() => navigation.navigate('Notes')}>
              <Icon type="FontAwesome5" name="sticky-note" />
              <Text>Notes</Text>
        </Button>
          </FooterTab> 
          </Footer>
      </Container>
      
    );
  }