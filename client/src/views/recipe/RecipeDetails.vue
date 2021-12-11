<template>
  <div v-if="recipe" class="card">
    <div class="card-body">
      <h1 class="card-title">{{ recipe.title }}</h1>
      <p class="card-text fs-5">{{ recipe.instruction }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    recipe: null,
  }),
  async created() {
    try {
      const res = await axios.get(`/recipes/${this.$route.params.recipeId}`);
      this.recipe = res.data;
    } catch (e) {
      console.warn(e);
    }
  },
};
</script>

<style scoped>
.card {
  color: black;
}
</style>
