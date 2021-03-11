import React, { Component } from "react";
import { Container, Content } from "native-base";
import { List } from "react-native-paper";
import TaskCheckBox from "../components/checkbox";

class AccordionLista extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List.Section title="Agendadas" titleStyle={{ color: "#595959" }}>
            <List.Accordion
              theme={{ colors: "#404040" }}
              style={{ color: "#404040" }}
              titleStyle={{ color: "#404040" }}
              title="Tarefa Semanal"
              left={(props) => (
                <List.Icon {...props} color="#404040" icon="clipboard" />
              )}
            >
              <List.Item
                style={{ marginLeft: 18 }}
                titleStyle={{ color: "#404040" }}
                descriptionStyle={{ color: "#808080" }}
                descriptionNumberOfLines={5}
                right={(props) => <TaskCheckBox />}
                title="Lavar a roupa"
                description="Roupas brancas e roupas de cama."
              />
              <List.Item
                style={{ marginLeft: 18 }}
                titleStyle={{ color: "#404040" }}
                descriptionStyle={{ color: "#808080" }}
                descriptionNumberOfLines={5}
                right={(props) => <TaskCheckBox />}
                title="Faxina no quarto"
                description="Limpar rodapés, parede, móveis e chão. "
              />
            </List.Accordion>
            <List.Accordion
              theme={{ colors: "#404040" }}
              style={{ color: "#404040" }}
              titleStyle={{ color: "#404040" }}
              title="Tarefa Diaria"
              left={(props) => (
                <List.Icon {...props} color="#404040" icon="clipboard" />
              )}
            >
              <List.Item
                style={{ marginLeft: 18 }}
                titleStyle={{ color: "#404040" }}
                descriptionStyle={{ color: "#808080" }}
                descriptionNumberOfLines={5}
                right={(props) => <TaskCheckBox />}
                title="Alimentar os peixes"
                description="Comida para os mato-grossos, beta e dianema. "
              />
              <List.Item
                style={{ marginLeft: 18 }}
                titleStyle={{ color: "#404040" }}
                descriptionStyle={{ color: "#808080" }}
                descriptionNumberOfLines={5}
                right={(props) => <TaskCheckBox />}
                title="Leitura"
                description="Ler o livro 'Agilidade Emocional' no mínimo 1 hora. "
              />
            </List.Accordion>
            <List.Accordion
              theme={{ colors: "#404040" }}
              style={{ color: "#404040" }}
              titleStyle={{ color: "#404040" }}
              title="Tarefa Mensal"
              left={(props) => (
                <List.Icon {...props} color="#404040" icon="clipboard" />
              )}
            >
              <List.Item
                style={{ marginLeft: 18 }}
                titleStyle={{ color: "#404040" }}
                descriptionStyle={{ color: "#808080" }}
                descriptionNumberOfLines={5}
                right={(props) => <TaskCheckBox />}
                title="Limpeza do pátio"
                description="Cortar a grama e limpar os muros. "
              />
              <List.Item
                style={{ marginLeft: 18 }}
                titleStyle={{ color: "#404040" }}
                descriptionStyle={{ color: "#808080" }}
                descriptionNumberOfLines={5}
                right={(props) => <TaskCheckBox />}
                title="Manutenção do veículo"
                description="Limpeza, calibração dos pneus e verificar óleo. "
              />
            </List.Accordion>
          </List.Section>
        </Content>
      </Container>
    );
  }
}

export default AccordionLista;
