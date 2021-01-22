import * as React from 'react';
import {  } from 'react-native';
import { Container, Header, Content, Accordion, Footer, FooterTab, Button, Text, Icon, View , List, Body} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccordionDefault from './NoteList'


export default function Notes({ navigation }) {
    return (
        <Container>
        <Content>
            
        </Content>
      <Footer>
        <FooterTab>
        <Button vertical  onPress={() => navigation.push('Tasks')}>
              <Icon name="person" />
              <Text>Tasks</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Alarms')}>
              <Icon name="person" />
              <Text>Alarms</Text>
        </Button>
        <Button vertical active onPress={() => navigation.navigate('Notes')}>
              <Icon name="person" />
              <Text>Notes</Text>
        </Button>
          </FooterTab> 
          </Footer>
      </Container>
      
    );
  }