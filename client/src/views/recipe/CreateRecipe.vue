<template>
  <div>
    <div class="form-floating mb-3">
      <input v-model="title" type="text" class="form-control" placeholder="調酒名稱" />
      <label>調酒名稱</label>
    </div>
    <div class="form-floating mb-3">
      <textarea
        v-model="instruction"
        class="form-control h-100"
        rows="10"
        placeholder="步驟"
      ></textarea>
      <label>步驟</label>
    </div>
    <button @click="submit" class="btn btn-primary w-100">發佈</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    title: '',
    instruction: '',
  }),
  methods: {
    async submit() {
      const { title, instruction } = this;
      if (!title.length || !instruction.length) return;

      try {
        axios.post('/recipes', { title, instruction });
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
