<template>
  <div>
    <div>
      <img :src="photo" />
    </div>
    <div>{{ name }}</div>
    <div>{{ price }}</div>
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