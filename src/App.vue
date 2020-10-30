<template>
  <div class="appx">
    <p> HI </p>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="hOLA "  msg2="hOLA2 " message="xxxx "/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
.appx {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
