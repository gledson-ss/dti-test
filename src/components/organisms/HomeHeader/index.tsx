import React from "react";
import ButtonSubmit from "../../atoms/ButtonSubmit";
import Input from "../../atoms/Input";
import * as Styled from "./styles";

const HomeHeader: React.FC = () => {
  return (
    <Styled.Container>
      <Input placeholder="Digite o nome de um filme" field="name" />
      <Input placeholder="Digite o ano do filme (opcional)" field="year" />
      <Styled.ContainerOptions>
        <ButtonSubmit />
      </Styled.ContainerOptions>
    </Styled.Container>
  );
};

export default HomeHeader;
