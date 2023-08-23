<template>
  <form @submit.prevent>
    <input 
      placeholder="Search movie" 
      class="search-input" 
      type="text" 
      v-model="inputMovie"
    >
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputMovie = ref<string>('');
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>