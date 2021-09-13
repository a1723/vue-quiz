<template>
  <div class="fifthQuestion">
     <h1>{{ title }}</h1>
      <input type="radio" id="one" value="Один" v-model="picked">
      <label for="one">Один</label>
      <br>
      <input type="radio" id="two" value="Двааа" v-model="picked">
      <label for="two">Двааа</label>
      <p>Выбрано: {{ picked }}</p>
      <router-link to="/questionsResults"><button @click="nextQuestion">Принять ответ и перейти к следующему вопросу</button></router-link>
  </div>
</template>

<script>


export default {
  name: 'fifthQuestion',
  props: {
  },
  data() {
    return {
      title: 'fifthQuestion',
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
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
