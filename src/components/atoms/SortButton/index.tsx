import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsList } from "../../../context/MovieListSlice";
import {
  ratingDec,
  ratingInc,
  titleDec,
  titleInc,
} from "../../../utils/methodsSort";
import * as Styled from "./styles";

interface sortButtonProps {
  value: string;
}

interface resposeMoviesProps {
  id: number;
  Title: string;
  Poster: string;
  Year: number;
  averageRating: number;
  imdbID: string;
  type: string;
}

interface movieListProps {
  movieValues: {
    list: resposeMoviesProps[];
  };
}

const SortButton: React.FC<sortButtonProps> = ({ value }) => {
  const listMovie = useSelector<movieListProps>(
    (state) => state
  ) as movieListProps;

  const dispatch = useDispatch();
  function handleSortList() {
    let arrAux = [...listMovie.movieValues.list];
    switch (value) {
      case "Rating Decrease":
        arrAux.sort(ratingDec);
        dispatch(addItemsList(arrAux));
        break;
      case "Rating Increase":
        arrAux.sort(ratingInc);
        dispatch(addItemsList(arrAux));
        break;
      case "Name Decrease":
        arrAux.sort(titleDec);
        dispatch(addItemsList(arrAux));
        break;
      default:
        arrAux.sort(titleInc);
        dispatch(addItemsList(arrAux));
        break;
    }
  }

  return (
    <Styled.Container onPress={handleSortList}>
      <Styled.Description>{value}</Styled.Description>
    </Styled.Container>
  );
};

export default SortButton;
