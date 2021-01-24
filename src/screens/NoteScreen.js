import React from 'react';
import {  } from 'react-native';
import { Container, Header, Content, Accordion, Footer, FooterTab, Button, Text, Icon, View , List, Body} from 'native-base';

export default function Notes({ navigation }) {
    return (
        <Container>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text>Notas</Text>  
            </View>
            <Footer>
                  <FooterTab>
                        <Button vertical  onPress={() => navigation.navigate('Tasks')}>
                              <Icon type="FontAwesome5" name="tasks" />
                              <Text>Tarefas</Text>
                        </Button>
                        <Button vertical  onPress={() => navigation.navigate('Alarms')}>
                              <Icon type="FontAwesome5" name="business-time" />
                              <Text>Compromissos</Text>
                        </Button>
                        <Button vertical active onPress={() => navigation.navigate('Notes')}>
                              <Icon type="FontAwesome5" name="sticky-note" />
                              <Text>Notas</Text>
                        </Button>
                  </FooterTab> 
            </Footer>
      </Container>
      
    );
  }