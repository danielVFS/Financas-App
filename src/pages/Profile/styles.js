import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #131313;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-left: 30px;
`;

export const Logo = styled.Image`
  margin-top: 25px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Name = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 28px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const NewLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #00b94a;
  width: 90%;
  height: 45px;
  border-radius: 00px;
  margin-bottom: 10px;
`;

export const NewText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const Logout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #f00;
  width: 90%;
  height: 45px;
  border-radius: 00px;
  margin-bottom: 10px;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
