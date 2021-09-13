<template>
  <div id="app">
  <mainHeader />
    <div class="flexing">
      <questionPanel />
      <router-view />
    </div>
  <mainFooter />
  </div>
</template>

<script>

import firstQuestion from './components/firstQuestion'
import secondQuestion from './components/secondQuestion'
import thirdQuestion from './components/thirdQuestion'
import fourthQuestion from './components/fourthQuestion'
import fifthQuestion from './components/fifthQuestion'
import questionsResults from './components/questionsResults'
import mainHeader from './components/mainHeader'
import questionPanel from './components/questionPanel'
import mainFooter from './components/mainFooter'
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
    mainHeader,
    questionPanel,
    mainFooter,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
p {
    font-size: 25px;
  }
.flexing {
  display: flex;
  flex-direction: row;
}

</style>
