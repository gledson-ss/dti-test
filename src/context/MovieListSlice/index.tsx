import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface moviesProps {
  id: number;
  Title: string;
  Poster: string;
  Year: number;
  averageRating: number;
  imdbID: string;
  type: string;
}

const initialState = {
  list: [] as moviesProps[],
  movieSelected: {
    averageRating: 0,
    imdbID: "",
  },
};

const MovieSlice = createSlice({
  name: "MovieList",
  initialState,
  reducers: {
    addItemsList: (state, value: PayloadAction<moviesProps[]>) => {
      return (state = {
        list: value.payload,
        movieSelected: state.movieSelected,
      });
    },
    movieSelected: (
      state,
      value: PayloadAction<{
        averageRating: number;
        imdbID: string;
      }>
    ) =>
      (state = {
        list: state.list,
        movieSelected: {
          averageRating: value.payload.averageRating,
          imdbID: value.payload.imdbID,
        },
      }),
  },
});

export const { addItemsList, movieSelected } = MovieSlice.actions;

export default MovieSlice.reducer;
