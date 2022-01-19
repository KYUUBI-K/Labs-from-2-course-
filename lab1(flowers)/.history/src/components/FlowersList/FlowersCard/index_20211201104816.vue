<template>
    <div>
  <div class="flow">
    <div><img src="photo" /></div>
    <div>
      <div>{{ Name }}</div>
      <div>{{ Price }}$</div>
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