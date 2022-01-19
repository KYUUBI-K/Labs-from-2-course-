<template>
  <div class="task">
    <div>Назва препарату: {{ task.title }}</div>
    <div>Ціна: {{ task.price }}$</div>
    <div>Діюча речовина: {{ task.active_substance }}</div>
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
  width: 200px;
  border: 2px solid red;
  border-radius: 8px;
  margin: 10px;
}
</style>