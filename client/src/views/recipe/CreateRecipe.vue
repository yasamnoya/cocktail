<template>
  <div>
    <div class="card mb-3 p-3">
      <div class="card-body">
        <h2 class="mb-3">新增酒譜</h2>
        <div class="form-floating mb-3">
          <input v-model="recipe.title" type="text" class="form-control" placeholder="調酒名稱" />
          <label>調酒名稱</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            v-model="recipe.description"
            class="form-control h-100"
            rows="3"
            placeholder="簡介"
          ></textarea>
          <label>簡介</label>
        </div>
        <div class="d-flex gap-3">
          <div class="input-group mb-3 w-100">
            <input
              v-model="recipe.amountInMl"
              type="text"
              class="form-control"
              placeholder="份量"
            />
            <span class="input-group-text">ml</span>
          </div>
          <div class="input-group mb-3 w-100">
            <input v-model="recipe.avl" type="text" class="form-control" placeholder="酒精濃度" />
            <span class="input-group-text">%</span>
          </div>
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
    <button @click="submit" class="btn btn-primary w-100">發佈</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    recipe: {
      title: '',
      description: '',
      steps: [],
      amountInMl: null,
      avl: null,
    },
  }),
  created() {
    this.addStep();
  },
  methods: {
    async submit() {
      if (!this.recipe.title.length || !this.recipe.description.length) return;
      this.recipe.steps = this.recipe.steps.map((step, index) => ({
        stepNo: index + 1,
        ...step,
      }));

      try {
        await axios.post('/recipes', this.recipe);
        this.$router.push('/recipes');
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
