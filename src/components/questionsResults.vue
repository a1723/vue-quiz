<template>
  <div class="questionsResults">
      {{ questionsResults }}
      {{ this.answers }}
      <br><br><br>
      <router-link to="/"><button @click="clearLocalStorage">Пройти тест ещё раз</button></router-link>
  </div>
</template>

<script>


export default {
  name: 'questionsResults',
  props: {
  },
  data() {
    return {
      title: 'questionsResults',
      picked: '',
      answers: [],
    }
  },
  mounted() {
    if (localStorage.getItem('answers')) {
      try {
        this.answers = JSON.parse(localStorage.getItem('answers'));
      } catch(e) {
        console.log(e);
      }
    }
  },
  methods: {
    nextQuestion() {
      if (this.picked != ''){
      this.answers.push(this.picked);
      }
      console.log(this.picked);
      console.log(this.answers);
      this.saveAnswersToLocalStorage();
    },
    saveAnswersToLocalStorage() {
      const parsed = JSON.stringify(this.answers);
      console.log(parsed);
      localStorage.setItem('answers', parsed);
    },
    clearLocalStorage() {
      localStorage.setItem('answers', '');
      console.log(this.answers);
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
