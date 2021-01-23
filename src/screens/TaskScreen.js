import * as React from 'react';
import { } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,View, Text  } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Tasks({ navigation }) {
    return (
      <Container>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tasks</Text>
      </View>
      <Footer>
        <FooterTab>
        <Button vertical  active onPress={() => navigation.navigate('Tasks')}>
              <Icon type="FontAwesome5" name="tasks" />
              <Text>Tasks</Text>
        </Button>
        <Button vertical  onPress={() => navigation.navigate('Alarms')}>
              <Icon type="FontAwesome5" name="business-time" />
              <Text>Alarms</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Notes')}>
              <Icon type="FontAwesome5" name="sticky-note" />
              <Text>Notes</Text>
        </Button>
          </FooterTab> 
          </Footer>
      </Container>
    );
  }