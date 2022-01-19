<template>
  <div>
    <div>
      <label>
        title
        <input type="text" v-model="title" />
      </label>
      <label>
        price
        <input type="text" v-model.number="price" />
      </label>
      <label>
        active_substance
        <input type="number" v-model.number="active_substance" />
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
      price: null,
      active_substance: null,
    };
  },

  methods: {
    ...mapActions(["addTask"]),
    onAdd() {
      this.addTask({
        title: this.title,
        price: this.price,
        active_substance: this.active_substance,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>