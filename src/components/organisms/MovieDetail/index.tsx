import React, { useEffect, useState } from "react";
import { api } from "../../../service/api";
import * as Styled from "./styles";

interface movieDetailProps {
  movieId: string;
  average?: number;
}

interface responseMovieProps {
  Actors: string;
  Awards: string;
  Director: string;
  Genre: string;
  Plot: string;
  Poster: string;
  Title: string;
  Writer: string;
  Year: string;
}

const MovieDetail: React.FC<movieDetailProps> = ({ movieId, average }) => {
  const [movieChoosed, setMovieChoosed] = useState<responseMovieProps>(
    {} as responseMovieProps
  );

  async function getMovie() {
    const response = await api.get("", {
      params: {
        i: movieId,
        plot: "full",
      },
    });
    setMovieChoosed(response.data);
  }

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <Styled.Container>
      <Styled.Image
        source={{
          uri: movieChoosed.Poster,
        }}
      />
      <Styled.Title>Title: {movieChoosed.Title}</Styled.Title>
      <Styled.Title>Rating: {average}/100</Styled.Title>
      <Styled.Title>Actors: {movieChoosed.Actors}</Styled.Title>
      <Styled.Title>Awards: {movieChoosed.Awards}</Styled.Title>
      <Styled.Title>Director: {movieChoosed.Director}</Styled.Title>
      <Styled.Title>Detail: {movieChoosed.Plot}</Styled.Title>
      <Styled.Title>Genre: {movieChoosed.Genre}</Styled.Title>
      <Styled.Title>Writer: {movieChoosed.Writer}</Styled.Title>
      <Styled.Title>Year: {movieChoosed.Year}</Styled.Title>
    </Styled.Container>
  );
};

export default MovieDetail;
