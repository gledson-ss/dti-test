import React from "react";
import * as Styled from "./styles";
import { movieSelected } from "../../../context/MovieListSlice";
import { useDispatch } from "react-redux";
import { CommonActions, useNavigation } from "@react-navigation/native";

interface cardProps {
  title: string;
  img: string;
  averageRating: number;
  imdbID: string;
}

const MovieCard: React.FC<cardProps> = ({
  title,
  img,
  averageRating,
  imdbID,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleOnPress() {
    dispatch(movieSelected({ imdbID, averageRating }));
    navigation.dispatch(
      CommonActions.navigate({
        name: "Movie",
      })
    );
  }

  return (
    <Styled.Container onPress={handleOnPress} activeOpacity={10}>
      <Styled.Image
        source={{
          uri: img,
        }}
      />
      <Styled.InfoContainer>
        <Styled.Text>Title: {title}</Styled.Text>
        <Styled.Text>
          {averageRating
            ? `Average Rating: ${averageRating}/100`
            : "Average Rating: Rating Not Found."}
        </Styled.Text>
      </Styled.InfoContainer>
    </Styled.Container>
  );
};

export default MovieCard;
