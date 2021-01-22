import React, { Component } from "react";
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Accordion } from "native-base";
const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];
  class AccordionDefault extends Component {
    render() {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Default</Title>
            </Body>
            <Right />
          </Header>
          <Content padder style={{ backgroundColor: "white" }}>
            <Accordion dataArray={dataArray} animation={false} expanded={0} />
          </Content>
        </Container>
      );
    }
  }

  export default AccordionDefault;