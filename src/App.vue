<template>
  <div id="app">
  <p>Hello Vue!</p>
  <firstQuestion></firstQuestion>
  </div>
</template>

<script>

import firstQuestion from './components/firstQuestion'

export default {
  name: 'App',
  components: {
    firstQuestion
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
</style>
