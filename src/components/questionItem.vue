<template>
  <div class="question-item">
    <h1>{{question_data[index].name}}</h1>
    <p>{{question_data[index].text}}</p>
      <div v-for="answer in question_data[index].answers">
          <input type="radio" v-model="picked" name="answer" :value="answer"> {{answer}}
      </div>
    <div class="mt-2">Выбрано: <strong>{{ picked }}</strong></div>
    <!-- <router-link to="/questionsResults"><button v-show="index === 4" >next</button></router-link> -->
    <button :disabled='isDisabled' v-show="index !== 4" @click="nextQuestion()">Ответить и перейти к следующему вопросу</button>
    <!-- <p v-if= "index === 4" @click.native="nextQuestion()"><router-link to="/questionsResults">nuxt</router-link></p> -->
    <button :disabled='isDisabled' v-show="index === 4" @click="handleClick() ">Ответить и перейти к результатам</button>
  </div>
</template>

<script>

export default {
  name: "questionItem",
  props: {
      question_data: {
        type: Array,
        default() {
          return {}
      }
    }
  },
  data() {
    return{
      index: 0,
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
  computed: {
      state() {
        return Boolean(this.picked);
      },
      isDisabled() {
        return !this.picked;
      },
  },
  methods: {
         nextQuestion() {

          this.index++;
          if (this.picked != ''){
          this.answers.push(this.picked);
          }
          console.log(this.picked);
          console.log(this.answers);
          this.saveAnswersToLocalStorage();
          this.picked = '';
         },
        saveAnswersToLocalStorage() {
          const parsed = JSON.stringify(this.answers);
          console.log(parsed);
          localStorage.setItem('answers', parsed);
        },
        handleClick() {
          if (this.picked != ''){
          this.answers.push(this.picked);
          }
          console.log(this.picked);
          console.log(this.answers);
          this.saveAnswersToLocalStorage();
          this.$router.push('/questionsResults')
        }
  }
}

</script>
<style>

</style>
