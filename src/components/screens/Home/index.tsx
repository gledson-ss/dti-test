import React from "react";
import * as Styled from "./styles";
import HomeHeader from "../../organisms/HomeHeader";
import MovieList from "../../organisms/MovieList";

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.ScrollContainer>
        <HomeHeader />
        <MovieList />
      </Styled.ScrollContainer>
    </Styled.Container>
  );
};

export default Home;
