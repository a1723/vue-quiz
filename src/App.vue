<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>

import firstQuestion from './components/firstQuestion'
import secondQuestion from './components/secondQuestion'
import thirdQuestion from './components/thirdQuestion'
import fourthQuestion from './components/fourthQuestion'
import fifthQuestion from './components/fifthQuestion'
import questionsResults from './components/questionsResults'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    firstQuestion,
    secondQuestion,
    thirdQuestion,
    fourthQuestion,
    fifthQuestion,
    questionsResults,
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
  margin-top: 3px;
}
p {
    font-size: 25px;
  }
</style>
