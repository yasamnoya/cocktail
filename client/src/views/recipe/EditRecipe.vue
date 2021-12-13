<template>
  <div v-if="recipe">
    <div class="form-floating mb-3">
      <input v-model="recipe.title" type="text" class="form-control" placeholder="調酒名稱" />
      <label>調酒名稱</label>
    </div>
    <div class="form-floating mb-3">
      <textarea
        v-model="recipe.instruction"
        class="form-control h-100"
        rows="10"
        placeholder="步驟"
      ></textarea>
      <label>步驟</label>
    </div>
    <button @click="submit" class="btn btn-primary w-100">儲存</button>
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
  methods: {
    async submit() {
      const { title, instruction } = this.recipe;
      if (!title.length || !instruction.length) return;

      try {
        await axios.patch(`/recipes/${this.$route.params.recipeId}`, this.recipe);
        this.$router.push('/recipes');
      } catch (e) {
        console.warn(e);
      }
    },
  },
};
</script>

<style scoped>
.form-floating label {
  color: black;
}
</style>
