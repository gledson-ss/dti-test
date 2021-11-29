import React from "react";
import * as Styled from "./styles";

interface cardProps {
  title: string;
  img: string;
  rating?: number;
}

const MovieCard: React.FC<cardProps> = ({ title, img, rating }) => {
  return (
    <Styled.Container>
      <Styled.Image
        source={{
          uri: img,
        }}
      />
      <Styled.InfoContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Title>{rating}</Styled.Title>
      </Styled.InfoContainer>
    </Styled.Container>
  );
};

export default MovieCard;
