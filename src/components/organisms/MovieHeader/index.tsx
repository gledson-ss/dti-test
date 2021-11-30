import React from "react";
import * as Styled from "./styles";
import BackIcon from "../../atoms/BackIcon";
import { useNavigation } from "@react-navigation/native";
import { movieSelected } from "../../../context/MovieListSlice";
import { useDispatch } from "react-redux";

const MovieHeader: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  function handleOnPress() {
    navigation.goBack();
    dispatch(
      movieSelected({
        averageRating: 0,
        imdbID: "",
      })
    );
  }

  return (
    <Styled.Container>
      <Styled.Button onPress={handleOnPress}>
        <BackIcon />
      </Styled.Button>
      <Styled.Text>Back</Styled.Text>
    </Styled.Container>
  );
};

export default MovieHeader;
