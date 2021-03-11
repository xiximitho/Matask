import * as React from "react";
import {} from "react-native";
import { Container, Footer, FooterTab, Button, Icon, Text } from "native-base";
import Lista from "./TaskList";

export default function Tasks({ navigation }) {
  return (
    <Container>
      <Lista />
      <Footer>
        <FooterTab>
          <Button vertical active onPress={() => navigation.navigate("Tasks")}>
            <Icon type="FontAwesome5" name="tasks" />
            <Text>Tarefas</Text>
          </Button>
          <Button vertical onPress={() => navigation.push("Alarms")}>
            <Icon type="FontAwesome5" name="business-time" />
            <Text>Compromissos</Text>
          </Button>
          <Button vertical onPress={() => navigation.push("Notes")}>
            <Icon type="FontAwesome5" name="sticky-note" />
            <Text>Notas</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
