import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface resposeMoviesProps {
  id: number;
  Title: string;
  Poster: string;
  Year: number;
  imdbRating: number;
  type: string;
}

const initialState = {
  list: [] as resposeMoviesProps[],
  movieSelected: "",
};

const MovieSlice = createSlice({
  name: "MovieList",
  initialState,
  reducers: {
    addItemsList: (state, value: PayloadAction<resposeMoviesProps[]>) => {
      return (state = {
        list: value.payload,
        movieSelected: state.movieSelected,
      });
    },
    movieSelected: (state, value: PayloadAction<string>) =>
      (state = {
        list: state.list,
        movieSelected: value.payload,
      }),
  },
});

export const { addItemsList, movieSelected } = MovieSlice.actions;

export default MovieSlice.reducer;
