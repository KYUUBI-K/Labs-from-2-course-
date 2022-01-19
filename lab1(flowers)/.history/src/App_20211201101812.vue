<template>
  <div id="app">
    <flowers />
  </div>
</template>

<script>
import Flowers from "@components/Flowers";
export default {
  name: "App",
  components: {
    Flowers,
  },
  data() {
    return {
      Flowers,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
