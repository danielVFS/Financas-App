import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import HistoryList from "../../components/HistoryList";
import { Background, Container, Name, Balance, Title, List } from "./styles";

export default function Home() {
  const [history, setHistory] = useState([
    { key: "1", type: "recipe", value: 1200 },
    { key: "2", type: "cost", value: 500 },
    { key: "3", type: "recipe", value: 100 },
    { key: "4", type: "cost", value: 89.62 },
  ]);
  const { user } = useContext(AuthContext);

  return (
    <Background>
      <Container>
        <Name>Daniel</Name>
        <Balance>R$150,00</Balance>
      </Container>
      <Title>Últimas movimentações</Title>

      <List
        showVerticalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        data={history}
        renderItem={({ item }) => <HistoryList data={item} />}
      />
    </Background>
  );
}
