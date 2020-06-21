import React, { useState, useContext } from "react";
import { Platform } from "react-native";

import {
  Background,
  Container,
  Logo,
  InputArea,
  Input,
  SubmitButton,
  SubmitText,
} from "../SignIn/styles";

import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    signUp(email, password, name);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <InputArea>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </InputArea>
        <InputArea>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </InputArea>
        <InputArea>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </InputArea>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
