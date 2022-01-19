<template>
  <div class="task">
    <div>Назва препарату: {{ task.title }}</div>
    <div>Ціна: {{ task.price }}$</div>
    <div>Діюча речовина: {{ task.active_substance }}</div>
    <button @click="deletetask">Видалити препарат</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Taskitem",
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions(["delete"]),
    deletetask() {
      this.delete(this.task.id);
    },
  },
};
</script>

<style lang="css" scoped>
.task {
  width: 300px;
  border: 2px solid red;
  border-radius: 8px;
  margin: 10px;
}
</style>