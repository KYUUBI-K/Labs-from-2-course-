<template>
  <div class="flow">
    <flowers-card v-for="task in FlowersCard" :key="task.id" :task="task" />
  </div>
</template>

<script>
import FlowersCard from "./FlowersCard";
export default {
  name: "FlowersList",
  components: {
    FlowersCard,
  },
};
</script>

<style lang="css" scoped>
.flow {
  width: 200px;
  border: 2px solid green;
  border-radius: 8px;
  margin: 10px;
}
</style>