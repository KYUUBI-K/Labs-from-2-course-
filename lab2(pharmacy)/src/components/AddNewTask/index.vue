<template>
  <div>
    <div>
      <label>
        Назва:
        <input type="text" v-model="title" />
      </label>
      <label>
        Ціна:
        <input type="text" v-model.number="price" />
      </label>
      <label>
        Діюча речовина:
        <input type="text" v-model="active_substance" />
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