<template>
  <main>
    <header class="header">
      <img src="/logo.svg" class="header-logo" alt="header-logo">
      <h2>Favorites Movies</h2>
    </header>
    <div class="tabs">
      <button :class="['btn', {btn_green: moviesStore.activeTab === 1}]" @click="setTab(1)">Favorites</button>
      <button :class="['btn', {btn_green: moviesStore.activeTab === 2}]" @click="setTab(2)">Search</button>
    </div>
    <div class="movies" v-if="moviesStore.activeTab === 1">
      <h3>Watched Movies: {{ moviesStore.watchedMovies.length }}</h3>
      <movie-item v-for="movie of moviesStore.watchedMovies" :key="movie.id" :movie="movie" />
    </div>
    <div class="movies" v-if="moviesStore.activeTab === 1">
      <h3>All Movies: {{moviesStore.totalCountMovies}}</h3>
      <movie-item v-for="movie of moviesStore.movies" :key="movie.id" :movie="movie" />
    </div>
    <div class="search" v-else>
      <search-movie />
    </div>
  </main>
</template>

<script setup lang="ts">
import MovieItem from './components/MovieItem.vue';
import SearchMovie from './components/SearchMovie.vue';
import { useMovieStore } from './stores/movieStore.ts';

const moviesStore = useMovieStore();
const setTab = (tab: number) => moviesStore.setActiveTab(tab);
</script>


<style scoped lang="css">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.header-logo {
  max-width: 50px;
  margin-right: 10px;
}

.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}

.btn:hover {
  opacity: 0.7;
}

.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
