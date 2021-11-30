import axios from "axios";
import config from "../../config";

export const api = axios.create({
  baseURL: `https://www.omdbapi.com/?apikey=57b8c249`,
});
