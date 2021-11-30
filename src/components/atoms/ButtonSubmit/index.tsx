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
  averageRating: number;
  imdbID: string;
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

  const dispatch = useDispatch();

  async function getRating(imdbID: string) {
    const response = await api.get("", {
      params: {
        i: imdbID,
      },
    });
    const rating = response.data.Ratings as [{ Value: string }];

    var size = 0;
    var sum = rating.reduce((current, item, index) => {
      var num = Number(item.Value.split(/\D/g)[0]);
      if (index === 0) {
        num = num * 10;
      }
      size += 1;
      return current + num;
    }, 0);

    var average = (sum / size).toFixed(0);
    return average;
  }

  async function getMovies() {
    if (searchInput.inputValues.name.length === 0) {
      dispatch(addItemsList([]));
      return;
    }

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
        const average = await getRating(item.imdbID);

        const newItem = {
          ...movieArray[index],
          averageRating: Number(average),
          id: index,
        };
        newArray = [...newArray, newItem];
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
