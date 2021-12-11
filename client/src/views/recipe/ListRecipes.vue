<template>
  <div class="card">
    <ul class="list-group list-group-flush">
      <router-link v-for="recipe in recipes" :key="recipe.id" :to="`/recipes/${recipe.id}`">
        <li class="list-group-item">
          <div class="card-title fs-3">{{ recipe.title }}</div>
          <div class="card-text">{{ recipe.instruction }}</div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    recipes: [],
  }),
  async created() {
    try {
      const res = await axios.get('/recipes');
      this.recipes = res.data;
    } catch (e) {
      console.warn(e);
    }
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
