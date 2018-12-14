<template>
  <div id="app">
    <h1>{{ greeting }}</h1>
    <router-link to="/">Home</router-link>
    <router-link to ="/search_ip">Search IP</router-link> 

    <router-view />

    <p>name     : {{ responce.family_name }}{{ responce.first_name }}</p>
    <p>name     : {{ responce.family_name_ruby }}{{ responce.first_name_ruby }}</p>
    <p>birthday : {{ responce.birth_month }} / {{ responce.birth_day }}</p>
    <p>CV       : {{ responce.cv }}</p>
    <p>arrival  : {{ responce.origin_media }}</p>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      greeting: 'HOGEhogeHUGAhuga'
    }
  },
  computed: {
    responce() {
      return this.$store.getters.resultResponce
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
