import React from "react";
import * as Styled from "./styles";
import MovieHeader from "../../organisms/MovieHeader";
import MovieDetail from "../../organisms/MovieDetail";
import { useSelector } from "react-redux";

interface moviesProps {
  movieValues: {
    movieSelected: {
      averageRating: number;
      imdbID: string;
    };
  };
}

const Movie: React.FC = () => {
  const movies = useSelector<moviesProps>((state) => state) as moviesProps;
  // console.log(movies);
  return (
    <Styled.Container>
      <Styled.ScrollContainer>
        <MovieHeader />
        <MovieDetail
          movieId={movies.movieValues.movieSelected.imdbID}
          average={movies.movieValues.movieSelected.averageRating}
        />
      </Styled.ScrollContainer>
    </Styled.Container>
  );
};

export default Movie;
