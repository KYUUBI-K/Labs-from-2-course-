<template>
  <div class="task">
    <div>{{ task.where_go }}</div>
    <div>{{ task.price }}</div>
    <div>{{ task.days }}</div>
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
  /* width: 200px;
  border: 2px solid red;
  border-radius: 8px;
  margin: 10px; */
}
</style>