<template>
  <div id="app">
    <div class="menu">
      <router-link to="/" class="gradient-button">Список студентів</router-link>
      <router-link to="/addPerson" class="gradient-button">Додати студента</router-link>
      <router-link to="/filterPerson" class="gradient-button">Фільтрація</router-link>
    </div>
    <br>
    <hr>
    <div>
      <router-view></router-view>
    </div>
    <hr>
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
.gradient-button {
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 20px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  font-family: gideon roman regular;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: .5s;
}
.gradient-button:hover {
  background-position: right center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: blue;
  margin-top: 50px;
}
</style>
