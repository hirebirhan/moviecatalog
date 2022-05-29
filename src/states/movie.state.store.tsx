import React from "react";
import { createStore } from "zustand";
import axios from "axios";
import { IMovie } from "./IMovie";
const url = "http://www.omdbapi.com/?i=tt3896198&apikey=";
const apiKey = "fdf97d62";

interface movieState {
  movies: IMovie[];
  getMovies: () => void;
  search: (title: string) => void;
  setMovies: (movies: IMovie[]) => void;
}

export const movieStore = (set: any, get: any): movieState => ({
  getMovies: () => {
    axios.get(url + apiKey).then((response) => {
      let movies = [];
      if (response.status == 200) {
        movies.push(response.data);
      }
      get().setMovies(movies);
    });
    return useMovieStore.getState();
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
