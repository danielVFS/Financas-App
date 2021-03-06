import React, { useState, useContext } from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { AuthContext } from "../../contexts/auth";

import {
  Background,
  Container,
  Logo,
  InputArea,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "./styles";

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../assets/Logo.png")} />

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

        <SubmitButton onPress={handleSignIn}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
