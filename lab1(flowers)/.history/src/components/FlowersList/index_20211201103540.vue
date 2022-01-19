<template>
  <div class="flow">
    <div><img src="photo" />$</div>
    <div>
      <div>{{ Name }}</div>
      <div>{{ Price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlowersList",
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

<style lang="css" scoped>
.flow {
  display: grid;
  grid-template-columns: 1fr, 2fr;
}
</style>