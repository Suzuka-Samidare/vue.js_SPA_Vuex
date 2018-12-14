<template>
  <div id="search-ip">
    <div>
      <p v-text="ip"></p>
      <div>
        <input @click="getIp" type="button" value="get IP">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchIp',
    data() {
      return {
        ip: 'IP is displayed here.'
      }
    },
    methods: {
      getIp() {
        this.ip = 'get your IP now...';
        this.$axios.get('https://httpbin.org/get')
          .then((res) => {
            this.ip = res.data.origin;
          })
          .catch((err) => {
            this.ip = 'failed get your IP';
          });
      }
    }
  }
</script>

<style>
#search-ip {
  background-color: coral;
}
</style>
