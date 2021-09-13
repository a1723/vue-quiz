<template>
  <div class="thirdQuestion">
     <h1>{{ title }}</h1>
      <input type="radio" id="one" value="Один" v-model="picked">
      <label for="one">Один</label>
      <br>
      <input type="radio" id="two" value="Два" v-model="picked">
      <label for="two">Два</label>
      <br>
      <input type="radio" id="three" value="Три" v-model="picked">
      <label for="three">Трииии</label>
      <br>
      <p>Выбрано: {{ picked }}</p>
      <router-link to="/4"><button @click="nextQuestion">Принять ответ и перейти к следующему вопросу</button></router-link>
  </div>
</template>

<script>


export default {
  name: 'thirdQuestion',
  props: {
  },
  data() {
    return {
      title: 'thirdQuestion',
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
