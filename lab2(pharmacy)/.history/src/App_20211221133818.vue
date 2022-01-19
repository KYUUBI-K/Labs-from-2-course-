<template>
  <div id="app">
    <router-link to="/list">До ліста </router-link>
    <router-link to="/AboutCars">До машин </router-link>
    <router-link to="/AboutMe">про мене </router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
