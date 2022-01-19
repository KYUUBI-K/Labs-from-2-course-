<template>
  <div>
    <div><img src="photo" /></div>
    <div>
      <div>{{ Name }}</div>
      <div>{{ Price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flowers",
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