import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

import {
  Container,
  Header,
  Logo,
  Name,
  NewLink,
  NewText,
  Logout,
  LogoutText,
} from "./styles";

export default function Profile() {
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/Logo.png")} />
        <TouchableOpacity>
          <Icon name="edit" size={30} color="#FFF" style={{ marginTop: 20 }} />
        </TouchableOpacity>
      </Header>
      <Name>{user && user.name}</Name>
      <NewLink onPress={() => navigation.navigate("Registrar")}>
        <NewText>Registrar Gastos</NewText>
      </NewLink>
      <Logout onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}
