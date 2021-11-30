import React from "react";
import { useSelector } from "react-redux";
import ButtonSubmit from "../../atoms/ButtonSubmit";
import Input from "../../atoms/Input";
import SortField from "../../molecules/SortField";
import * as Styled from "./styles";

interface MoviesProps {
  id: number;
  Title: string;
  Poster: string;
  Year: number;
  imdbRating: number;
  type: string;
}

interface movieListProps {
  movieValues: {
    list: MoviesProps[];
  };
}

const HomeHeader: React.FC = () => {
  const listMovie = useSelector<movieListProps>(
    (state) => state
  ) as movieListProps;

  return (
    <Styled.Container>
      <Input placeholder="Name..." field="name" />
      <Input placeholder="Year... (not required)" field="year" />
      <Styled.ContainerOptions>
        <ButtonSubmit />
      </Styled.ContainerOptions>
      <Styled.ContainerOptions>
        {listMovie.movieValues.list.length > 0 && <SortField />}
      </Styled.ContainerOptions>
    </Styled.Container>
  );
};

export default HomeHeader;
