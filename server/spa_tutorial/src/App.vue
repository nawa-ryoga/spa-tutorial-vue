<template>
  <div id="app">
    <header-component></header-component>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
export default {
  name: 'App',
  components: {
    'header-component': HeaderComponent
  }
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
