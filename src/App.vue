<template>
  <div id="app">
  <mainHeader />
    <div class="flexing">
      <questionPanel />

      <router-view></router-view>
    </div>
  <mainFooter />
  </div>
</template>

<script>
import questions from './components/questions'
import questionPanel from './components/questionPanel'
import mainHeader from './components/mainHeader'
import mainFooter from './components/mainFooter'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'App',
  components: {
    questions,
    questionPanel,
    mainHeader,
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
