<template>
  <div>
    <div v-if="recipe" class="card mb-3 p-3">
      <div class="card-body">
        <h2 class="mb-3">編輯酒譜</h2>
        <div class="form-floating mb-3">
          <input v-model="recipe.title" type="text" class="form-control" placeholder="調酒名稱" />
          <label>調酒名稱</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            v-model="recipe.instruction"
            class="form-control h-100"
            rows="3"
            placeholder="步驟"
          ></textarea>
          <label>步驟</label>
        </div>

        <div class="card-title mt-5">
          <h2>步驟</h2>
        </div>
        <div v-for="(step, index) in recipe.steps" :key="index" class="step-block ms-3 mb-3">
          <div class="d-flex justify-content-between">
            <h3>{{ index + 1 }}</h3>
            <button @click="deleteStep(index)" class="btn">X</button>
          </div>
          <textarea
            v-model="step.instruction"
            class="form-control h-100"
            rows="3"
            placeholder="請輸入步驟說明"
          ></textarea>
        </div>
        <button @click="addStep" class="btn btn-outline-primary w-100">新增步驟</button>
      </div>
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
      const recipe = res.data;
      recipe.steps = recipe.Steps;
      delete recipe.Steps;

      this.recipe = recipe;
    } catch (e) {
      console.warn(e);
    }
  },
  methods: {
    async submit() {
      const { title, instruction } = this.recipe;
      if (!title.length || !instruction.length) return;

      this.recipe.steps = this.recipe.steps.map((step, index) => ({
        stepNo: index + 1,
        title: step.title,
        instruction: step.instruction,
      }));

      try {
        await axios.patch(`/recipes/${this.$route.params.recipeId}`, this.recipe);
        this.$router.push(`/recipes/${this.$route.params.recipeId}`);
      } catch (e) {
        console.warn(e);
      }
    },
    addStep() {
      this.recipe.steps.push({ instruction: '' });
    },
    deleteStep(stepIndex) {
      this.recipe.steps.splice(stepIndex, 1);
    },
  },
};
</script>

<style scoped>
.form-floating label,
.card {
  color: black;
}
</style>
