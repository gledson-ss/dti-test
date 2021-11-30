import React from "react";
import * as Styled from "./styles";
import SortButton from "../../atoms/SortButton";
const SortField: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Text>Sort By: </Styled.Text>

      <Styled.ButtonContainer>
        <Styled.Content>
          <Styled.Text>Name: </Styled.Text>
          <Styled.SortContainer>
            <SortButton value="Name Decrease" />
            <SortButton value="Name Increase" />
          </Styled.SortContainer>
        </Styled.Content>

        <Styled.Content>
          <Styled.Text>Ratings: </Styled.Text>
          <Styled.SortContainer>
            <SortButton value="Rating Decrease" />
            <SortButton value="Rating Increase" />
          </Styled.SortContainer>
        </Styled.Content>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default SortField;
