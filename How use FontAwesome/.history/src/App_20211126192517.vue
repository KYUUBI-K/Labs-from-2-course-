<template>
  <div id="app">
    <div> <font-awesome-icon :icon = "['fab','galactic-senate']" size ="2x" color ="blue" /></div>
    <div><font-awesome-icon :icon = "['fas','robot']" size ="2x" color ="red"/></div>
    <div><font-awesome-icon :icon = "['far','address-card']" size ="2x" color ="green"/></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
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
