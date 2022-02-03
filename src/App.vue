<template>
<div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header>
      <img src="$`logo`" alt="Logo">

      //Add logo to the project

    </header>
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Start from './components/Start.vue'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      logoSource: './img/LOGO blk.png',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
