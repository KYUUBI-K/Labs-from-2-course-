<template>
  <div>
    <div>
      <label>
        title
        <input type="text" v-model="title" />
      </label>
      <label>
        company
        <input type="text" v-model.number="company" />
      </label>
      <label>
        year_of_issue
        <input type="number" v-model.number="year_of_issue" />
      </label>
      <button @click="onAdd">Add</button>
    </div>
  </div>
</template>

<script>
//1. Імпортуємо mapActions
import { mapActions } from "vuex";
export default {
  name: "AddNewTask",

  data() {
    return {
      title: null,
      company: null,
      year_of_issue: null,
    };
  },

  methods: {
    ...mapActions(["addTask"]),
    onAdd() {
      this.addTask({
        title: this.title,
        company: this.company,
        year_of_issue: this.year_of_issue,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>