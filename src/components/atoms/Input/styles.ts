import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Input = styled.TextInput`
  height: 48px;
  padding-left: 16px;
  padding-right: 12px;
  border: 1px solid #000000;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 20px;
  font-size: 18px;
`;

export const IconSearh = styled(AntDesign).attrs({
  name: "search1",
  size: 30,
  color: "#000000",
})``;
