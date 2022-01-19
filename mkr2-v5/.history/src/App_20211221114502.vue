<template>
  <div id="app">
    <div class="menu">
      <router-link to="/" class="pages">Список побутових приладів</router-link>
      <router-link to="/addHouseholdGoods" class="pages">Дадати побутовий прилад</router-link>
      <router-link to="/filterHouseholdGoods" class="pages">Фільтрація</router-link>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.pages {
  border-radius: 6px;
  background-color: black;
  margin-left: 20px;
  padding: 10px;
  color: yellow;
  text-decoration: none;
}
</style>
