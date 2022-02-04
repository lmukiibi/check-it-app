<template>
<div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header>
      <div>
      <img class="myLogo" src="./assets/LOGOblk.png" alt="Logo">
      <h4>Check It</h4>
      </div>
      <!--Add logo to the project-->

    </header>
    <router-view></router-view>
    <footer>
        <p>Vividlee Studio &copy; 2022</p>
    </footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Start from './components/Start.vue'
//import logoSourse from './assets/LOGOblk.png'

export default {

  name: 'App',
  components: {
  },
  data() {
    return {
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
}

.myLogo {
  width: 60px;
  height: 60px;
}

footer {
  position: fixed;
  bottom: 0;
  background-color: rgb(211, 211, 211);
  color: white;
  margin: 0px auto;
  border-radius: 450%;
}

</style>
