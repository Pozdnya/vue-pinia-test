import { defineStore } from 'pinia';
import { Movie } from '../types/Movie';

interface MovieStore {
  movies: Movie[];
  activeTab: number;
}

export const useMovieStore = defineStore('movieStore', {
  state: (): MovieStore => ({
    movies: [
      {
        id: 1,
        original_title: "Spider-Man",
        overview:
          "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
        poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
        release_date: "2002-05-01",
        isWatched: false,
      },
      {
        id: 2,
        original_title: "The Batman",
        overview:
          "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
        release_date: "2022-03-01",
        isWatched: true,
      },
    ],
    activeTab: 2,
  }),
  getters: {
   watchedMovies(state): Movie[] {
    return state.movies.filter((movie) => movie.isWatched);
   },
   totalCountMovies(state): number {
    return state.movies.length;
   },
  },
  actions: {
    setActiveTab(idTab: number ) {
      this.activeTab = idTab;
    },
    toggleWatched(movieId: number) {
      const movie = this.movies.find((movie) => movie.id === movieId);
      if (movie) {
        movie.isWatched = !movie.isWatched;
      }
    },
    deleteMovie(movieId: number) {
      const index = this.movies.findIndex((movie) => movie.id === movieId);
      if (index !== -1) {
        this.movies.splice(index, 1);
      }
    }
  },
});