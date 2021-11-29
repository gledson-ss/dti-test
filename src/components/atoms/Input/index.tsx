import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setYear } from "../../../context/InputSlice";
import * as Styled from "./styles";

interface inputProps {
  field: string;
  placeholder: string;
}
interface inputReduxProps {
  inputValues: {
    name: string;
    year: number;
  };
}

const Input: React.FC<inputProps> = ({ placeholder, field }) => {
  const dispatch = useDispatch();

  function handleChange(text: string) {
    if (field === "name") {
      dispatch(setName(text));
      return;
    }
    dispatch(setYear(text));
  }

  function handleMaxLength(): number {
    return field === "year" ? 4 : 40;
  }

  function handleKeyboardType() {
    return field === "year" ? "number-pad" : "default";
  }

  return (
    <Styled.Input
      placeholder={placeholder}
      onChangeText={(e) => handleChange(e)}
      maxLength={handleMaxLength()}
      keyboardType={handleKeyboardType()}
    />
  );
};

export default Input;
