<template>
  <div>
    <div class="card mb-3">
      <ul class="list-group list-group-flush">
        <router-link v-for="recipe in recipes" :key="recipe.id" :to="`/recipes/${recipe.id}`">
          <li class="list-group-item">
            <div class="d-flex">
              <p class="card-title fs-3 me-auto">{{ recipe.title }}</p>
              <div class="d-flex gap-3 align-items-center card-text text-muted">
                <p v-if="recipe.amountInMl">{{ recipe.amountInMl }} ml</p>
                <p v-if="recipe.avl">{{ recipe.avl }} %</p>
              </div>
            </div>
            <div class="card-text">{{ recipe.description }}</div>
          </li>
        </router-link>
      </ul>
    </div>
    <router-link to="/recipes/new">
      <button class="btn btn-primary w-100">新增酒譜</button>
    </router-link>
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
