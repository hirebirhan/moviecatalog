import create from "zustand";
import axios from "axios";
const apiUrl = "http://www.omdbapi.com/?type=movie&page=1&apikey=fdf97d62&s=";
// const apiKey = "fdf97d62";
const query = "hero";
// const page = 1;
const movieStore = create((set) => ({
  movies: [],
  error: [],
  fetchMovies: async () => {
    try {
      const response = await axios.get(apiUrl + query);
      const result = response.data.Search;
      movieStore.setState({ ...movieStore, movies: result });
    } catch (error) {
      movieStore.setState({ error: error });
    }
  },
  searchMovies: async (title: string) => {
    try {
      const response = await axios.get(apiUrl + title);
      const result = response.data.Search;
      movieStore.setState({ movies: result });
    } catch (error) {
      movieStore.setState({ error: error });
    }
  },
}));
export default movieStore;
