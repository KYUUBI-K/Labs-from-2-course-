<template>
  <div>
    <div>
      <img :src="flowers_data.photo" />
    </div>
    <div>{{ flowers_data.name }}</div>
    <div>{{ flowers_data.price }}</div>
  </div>
</template>

<script>
export default {
  name: "FlowersCard",
  props: {
    flowers_data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
</style>