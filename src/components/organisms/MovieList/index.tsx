import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import MovieCard from "../../molecules/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { addItemsList } from "../../../context/MovieListSlice";

interface MoviesProps {
  id: number;
  Title: string;
  Poster: string;
  Year: number;
  imdbRating: number;
  type: string;
}

interface stateProps {
  movieValues: {
    list: MoviesProps[];
    movieSelected: "";
  };
}

const MovieList: React.FC = () => {
  const moviesRedux = useSelector<stateProps>((state) => state) as stateProps;
  const [movies, setMovies] = useState<MoviesProps[]>([]);

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
            rating={item.imdbRating}
            img={item.Poster}
          />
        );
      })}
    </Styled.Container>
  );
};

export default MovieList;
