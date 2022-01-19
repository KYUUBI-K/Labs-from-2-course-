<template>
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
  width: 200px;
  border: 2px solid green;
  border-radius: 8px;
  margin: 10px;
}
</style>