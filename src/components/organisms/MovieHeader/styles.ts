import styled from "styled-components/native";

export const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #000000;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
`;

export const Text = styled.Text`
  font-weight: 600;
  margin-left: 8px;
  font-size: 20px;
`;
