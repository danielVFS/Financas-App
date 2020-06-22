import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";

import { Background, Container, Name, Balance, Title } from "./styles";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Background>
      <Container>
        <Name>Daniel</Name>
        <Balance>R$150,00</Balance>
      </Container>
      <Title>Últimas movimentações</Title>
    </Background>
  );
}
