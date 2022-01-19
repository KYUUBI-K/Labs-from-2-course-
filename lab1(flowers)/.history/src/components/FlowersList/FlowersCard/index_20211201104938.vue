<template>
    <div>
  <div class="task">
    <div><img src="task.photo" /></div>
    <div>
      <div>{{ task.Name }}</div>
      <div>{{ task.Price }}$</div>
    </div>
    </div>
</template>

<script>
export default {
  name: "FlowersCard",
  props: {
    photo: {
      type: String,
      default: null,
    },
    Name: {
      type: String,
      default: null,
    },
    Price: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>