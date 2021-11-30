import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border: 1px solid #000000;
  border-radius: 4px;
  margin: 0 25px;
  margin-bottom: 18px;
  max-width: 768px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Text = styled.Text`
  font-size: 20px;
`;

export const InfoContainer = styled.View`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;
