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
        <input type="number" v-model.number="active_substance" />
      </label>
      <button @click="onAdd">Add</button>
    </div>
    <div>
      <label>
        Назва:
        <input type="text" v-model="title" />
      </label>
      <button @click="deletetask">delete</button>
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
    ...mapActions(["addTask", "delete"]),
    onAdd() {
      this.addTask({
        title: this.title,
        price: this.price,
        active_substance: this.active_substance,
      });
    },
    deletetask() {
      this.delete({
        title: this.title,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>