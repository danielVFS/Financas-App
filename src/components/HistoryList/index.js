import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { Container, Type, IconView, TypeText, TextValue } from "./styles";

export default function HistoryList({ data }) {
  return (
    <Container>
      <Type>
        <IconView type={data.type}>
          <Icon
            name={data.type === "recipe" ? "arrow-up" : "arrow-down"}
            color="#FFF"
            size={20}
          />
          <TypeText>{data.type === "recipe" ? "Receita" : "Despesa"}</TypeText>
        </IconView>
      </Type>
      <TextValue>R$ {data.value}</TextValue>
    </Container>
  );
}
