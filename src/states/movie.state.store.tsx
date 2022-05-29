import React from "react";
import create, { createStore } from "zustand";
import axios, { AxiosResponse } from "axios";
import { IMovie } from "./IMovie";
const url = "http://www.omdbapi.com/?i=tt3896198&apikey=fdf97d62";

interface movieState {
  movies: IMovie[];
  getMovies: () => void;
  search: (title: string) => void;
  setMovies: (movies: IMovie[]) => void;
}

export const movieStore = (set: any, get: any): movieState => ({
  getMovies: () => {
    axios.get(url).then((response) => {
      let movies = [];
      if (response.status == 200) {
        movies.push(response.data);
      }
      get().setMovies(movies);
    });
    return get();
  },
  search: () => {
    Promise.resolve([]);
  },
  movies: [],
  setMovies: (movies) => {
    set({ movies: movies });
  },
});
export const useMovieStore = createStore<movieState>(movieStore);
