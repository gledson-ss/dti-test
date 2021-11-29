import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface inputSliceProps {
  name: string;
  year: string;
}

const initialState = {
  name: "",
  year: "",
} as inputSliceProps;

export const InputSlice = createSlice({
  name: "inputField",
  initialState,
  reducers: {
    setName: (state, value: PayloadAction<string>) =>
      (state = {
        name: value.payload,
        year: state.year,
      }),
    setYear: (state, value: PayloadAction<string>) =>
      (state = {
        name: state.name,
        year: value.payload,
      }),
  },
});

export const { setName, setYear } = InputSlice.actions;
export default InputSlice.reducer;
