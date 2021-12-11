<template>
  <div class="card">
    <ul class="list-group list-group-flush">
      <li v-for="recipe in recipes" :key="recipe.id" class="list-group-item">
        <div class="card-title fs-3">{{ recipe.title }}</div>
        <div class="card-text">{{ recipe.instruction }}</div>
      </li>
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
