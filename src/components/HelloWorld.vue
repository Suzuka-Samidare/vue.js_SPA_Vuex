<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" value="" @click="doUpdate">getData</el-button>
    <!-- <el-button type="primary" value="">getData</el-button> -->
    <p>name     : {{ responce.family_name }}{{ responce.first_name }}</p>
    <p>name     : {{ responce.family_name_ruby }}{{ responce.first_name_ruby }}</p>
    <p>birthday : {{ responce.birth_month }} / {{ responce.birth_day }}</p>
    <p>CV       : {{ responce.cv }}</p>
    <p>arrival  : {{ responce.origin_media }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '沖縄出身のアイドルといえば？'
    }
  },
  computed: {
    responce() {
      return this.$store.getters.resultResponce
    }
  },
  methods: {
    doUpdate() {
      this.$store.dispatch('doUpdate')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: aqua;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
