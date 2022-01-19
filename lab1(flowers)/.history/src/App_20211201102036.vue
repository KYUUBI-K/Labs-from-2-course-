<template>
  <div id="app">
    <flowers-list />
  </div>
</template>

<script>
import FlowersList from "@components/FlowersList";
export default {
  name: "App",
  components: {
    FlowersList,
  },
  data() {
    return {
      FlowersList: [
        {
          photo: wsad,
          Name: rose,
        },
      ],
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
