import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
`;

export const InputArea = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255,255,255,0.20)",
})`
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 17px;
  width: 90%;
  color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 0px;
`;

export const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #00b94a;
  height: 45px;
  width: 90%;
  border-radius: 0px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #131313;
`;
export const Link = styled.TouchableOpacity`
  margin-top: 5px;
  margin-bottom: 10px;
`;
export const LinkText = styled.Text`
  color: #d2d3d5;
`;
