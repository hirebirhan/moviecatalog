import React from "react";
import create from "zustand";
import axios from "axios";
const url = "https://www.omdbapi.com/";
const token =
  "03AGdBq274bFX1d13CHPMayyXXhu01C2KH-PXWA1-P3wFOO7lgYn5GupRCE1mazCOa3GjMUQ2PKSmOwEQk8uTtYsXU9Z9oR4-8gDRWlZdErYBRLflUi5rGnDrqMZPT68lLnlOPlj7cCfKQR410dmRBEWUBnz1ihExJNi1j0urnQJgNSo80_d5-mV2HFmTnlOO6KyS8W9O85V5gouHW7yJA9FUex-Vac8-aZVXnVzdeRKb5nmHuvht5rinM5w8_kh6i8UsLVWDH-irwfDikhFvXB4ph8zbjJPiev_BZuc4z_H-amxVDYBcmeCwfyS_MlHhzgR9LfWSiToRhR71nrVh3ZnqKHacrEBug3v-oCTHqRMAASm0x7R2h4SzjadcRRmLsGBwVnZFNE1TmSEQ6esSSwBV1gIaUNgXl3_2GDeTNVvkm4iK4Fw2pzrF5fnIr4qhroor1BWypaJw18zPn1CIEMdJsrUvs-BuXuw";
export const movieStore = create((set) => ({
  count: 0,
  movies: [],
  search: (title: string): void => {
    return;
  },
  getMovies: (): void => {
    axios
      .get(url + "title=title&token=" + token)
      .then((response) => {
        console.log("response", response);
        return response;
      })
      .catch((error) => {
        return error;
      });
  },
  setMovies: (movies: IMovie[]) => {},
  reset: () => set({ movies: [] }),
}));
export default movieStore;

export interface IMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
export interface Rating {
  Source: string;
  Value: string;
}
