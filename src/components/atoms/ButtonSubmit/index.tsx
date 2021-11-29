import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import { api } from "../../../service/api";
import { useDispatch, useSelector } from "react-redux";
import { addItemsList } from "../../../context/MovieListSlice";

interface inputReduxProps {
  inputValues: {
    name: string;
    year: string;
  };
}

interface resposeMoviesProps {
  id: number;
  Title: string;
  Poster: string;
  Year: number;
  imdbRating: number;
  type: string;
}

interface movieListProps {
  movieValues: {
    list: resposeMoviesProps[];
  };
}

const ButtonSubmit: React.FC = () => {
  const searchInput = useSelector<inputReduxProps>(
    (state) => state
  ) as inputReduxProps;

  const listMovie = useSelector<movieListProps>(
    (state) => state
  ) as movieListProps;
  const dispatch = useDispatch();

  async function getRating(title: string) {
    const rating = await api.get("", {
      params: {
        t: title,
      },
    });

    const response = rating.data.imdbRating;
    return response;
  }

  async function getMovies() {
    try {
      const res = await api.get("", {
        params: {
          s: searchInput.inputValues.name,
          y: searchInput.inputValues.year,
        },
      });
      const movieArray: resposeMoviesProps[] = res.data.Search;

      let newArray: resposeMoviesProps[] = [];
      movieArray.forEach(async (item, index) => {
        const rat = await getRating(item.Title);

        const newIndex = {
          ...movieArray[index],
          imdbRating: Number(rat),
          id: index,
        };
        newArray = [...newArray, newIndex];
        dispatch(addItemsList(newArray));
      });
    } catch {
      throw new Error("Error");
    }
  }

  return (
    <Styled.Container onPress={getMovies}>
      <Styled.Text>Search</Styled.Text>
    </Styled.Container>
  );
};

export default ButtonSubmit;
