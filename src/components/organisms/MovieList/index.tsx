import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import MovieCard from "../../molecules/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { addItemsList } from "../../../context/MovieListSlice";

interface moviesProps {
  id: number;
  Title: string;
  Poster: string;
  Year: number;
  averageRating: number;
  imdbID: string;
  type: string;
}

interface stateProps {
  movieValues: {
    list: moviesProps[];
    movieSelected: "";
  };
}

const MovieList: React.FC = () => {
  const moviesRedux = useSelector<stateProps>((state) => state) as stateProps;
  const [movies, setMovies] = useState<moviesProps[]>([]);

  useEffect(() => {
    setMovies([...moviesRedux.movieValues.list]);
  }, [moviesRedux.movieValues.list]);

  return (
    <Styled.Container>
      {movies.map((item) => {
        return (
          <MovieCard
            key={item.id}
            title={item.Title}
            averageRating={item.averageRating}
            img={item.Poster}
            imdbID={item.imdbID}
          />
        );
      })}
    </Styled.Container>
  );
};

export default MovieList;
