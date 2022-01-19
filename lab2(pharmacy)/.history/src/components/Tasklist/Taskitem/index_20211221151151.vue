<template>
  <div class="task">
    <div>{{ task.id }}</div>
    <div>Назва препарату: {{ task.title }}</div>
    <div>Ціна: {{ task.price }}$</div>
    <div>Діюча речовина: {{ task.active_substance }}</div>
    <button @click="deletetask">
  </div>
</template>

<script>
export default {
  name: "Taskitem",
  props: {
    task: {
      type: Object,
      default: () => ({}),
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