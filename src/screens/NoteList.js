import React, { Component } from "react";
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Accordion } from "native-base";
import {List, Checkbox} from 'react-native-paper'

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];
  class AccordionDefault extends Component {
    render() {
      return (
        <Container>
        <List.Section title="Accordions">
        <List.Accordion
        title=""
        left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First item" />
          <List.Item title="Second item" description="dasdasdas" />
          <Checkbox></Checkbox>
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
      </List.Section>
      </Container>
      );
    }
  }

  export default AccordionDefault;