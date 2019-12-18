<template>
  <div id="search-ip">
    <div>
      <p v-text="ip"></p>
      <div>
        <el-button @click="getIp">get IP</el-button>
      </div>
      <div>
        <p>{{ humanData }}</p>
      </div>
      <p v-bind:class="isActive ? 'active' : 'normal'">yeah!!!!!</p>
    </div>  
  </div>
</template>

<script>
  export default {
    name: 'SearchIp',
    data() {
      return {
        ip: 'IP is displayed here.',
        humanData: '',
        isActive: true,
        otherClass: 'Extra'
      }
    },
    created() {
      this.$axios.get('http://localhost:3000/users')
        .then((res) => {
          this.humanData = res.data[0]
        })
        .catch((err) => {
          this.humanData = 'failed'
        })
    },
    computed: {

      // return this.$store.getters.resultResponse
    },
    methods: {
      getIp() {
        this.ip = 'get your IP now...';
        this.$axios.get('http://localhost:3000/users')
          .then((res) => {
            console.log(res);
            this.ip = res.data[2];
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
