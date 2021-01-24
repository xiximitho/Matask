import React, { Component } from "react";
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Accordion, Text } from "native-base";
import {List} from 'react-native-paper'
import MyComponent from "../components/checkbox";

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

  class AccordionLista extends Component {


	render() {
      	return (
        		<Container>
				  <Content>
        			<List.Section title="Agendadas">
        				<List.Accordion title="Tarefa Semanal" left={props => <List.Icon {...props} icon="clipboard" />}>
          					<List.Item style={{marginLeft:18}} descriptionNumberOfLines={5}right={props=><MyComponent/>} title="Lavar a roupa" description="Roupas brancas e roupas de cama."/>
          					<List.Item style={{marginLeft:18}} descriptionNumberOfLines={5}right={props=><MyComponent/>} title="Faxina no quarto" description="Limpar rodapés, parede, móveis e chão. "/>
      				</List.Accordion>
      				<List.Accordion title="Tarefa Diaria" left={props => <List.Icon {...props} icon="clipboard" />}>
					<List.Item style={{marginLeft:18}} descriptionNumberOfLines={5}right={props=><MyComponent/>} title="Alimentar os peixes" description="Comida para os mato-grossos, beta e dianema. "/>
					<List.Item style={{marginLeft:18}} descriptionNumberOfLines={5}right={props=><MyComponent/>} title="Leitura" description="Ler o livro 'Agilidade Emocional' no mínimo 1 hora. "/>
      				</List.Accordion>
      				</List.Section>
					</Content>
      		</Container>
	      );
	}
  }

  export default AccordionLista;