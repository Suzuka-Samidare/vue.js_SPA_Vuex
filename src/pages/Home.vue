<template>
  <div id="home">
    <div>
      <p>Vue.js Vuex TEST</p>
      <HelloWorld />
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}

</script>

<style>
#home {
  background-color: yellow;
}
</style>
