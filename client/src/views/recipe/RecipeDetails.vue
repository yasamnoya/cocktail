<template>
  <div v-if="recipe">
    <div class="card mb-3">
      <div class="card-body">
        <h1 class="card-title">{{ recipe.title }}</h1>
        <p class="card-text fs-5">{{ recipe.instruction }}</p>
        <h3>步驟</h3>
        <div v-for="(step, index) in recipe.steps" :key="index" class="step-block ms-3 mb-3">
          <div class="d-flex gap-3">
            <h3>{{ index + 1 }}</h3>
            <p class="card-text fs-5">{{ step.instruction }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex w-100 gap-3">
      <router-link :to="`/recipes/${this.recipe.id}/edit`" class="flex-fill">
        <button class="btn btn-primary w-100">編輯</button>
      </router-link>
      <button @click="deleteRecipe" class="btn btn-danger flex-fill">刪除</button>
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
      this.recipe.steps = this.recipe.Steps;
      delete this.recipe.Steps;
    } catch (e) {
      console.warn(e);
    }
  },
  methods: {
    async deleteRecipe() {
      try {
        await axios.delete(`/recipes/${this.$route.params.recipeId}`);
        this.$router.push('/recipes');
      } catch (e) {
        console.warn(e);
      }
    },
  },
};
</script>

<style scoped>
.card {
  color: black;
}
</style>
