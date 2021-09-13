<template>
  <body>
    <main>
      <div class="firstQuestion pt-2 container col-md-12">
        <h1>{{ title }}</h1>
        <b-form-group v-model="picked" :state="state" name="radio-validation">
          <input type="radio" id="one" value="Один" v-model="picked">
          <label for="two">Один</label>
          <br>
          <input type="radio" id="two" value="Два" v-model="picked">
          <label for="two">Два</label>
          <br>
          <input type="radio" id="three" value="Три" v-model="picked">
          <label for="three">Три</label>
          <br>
          <input type="radio" id="four" value="Четыре" v-model="picked">
          <label for="four">Четыре</label>
          <br>
          <b-form-invalid-feedback :state="state"></b-form-invalid-feedback>
          <div class="mt-2">Выбрано: <strong>{{ picked }}</strong></div>
          <br>
          <router-link to="/2"><button :disabled='isDisabled' @click="nextQuestion">Принять ответ и перейти к следующему вопросу</button></router-link>
        </b-form-group>
      </div>
    </main>
  </body>
</template>

<script>

export default {
  name: 'firstQuestion',
  components: {},
  props: {},
  data() {
    return {
      title: 'Текст первого вопроса',
      picked: '',
      answers: [],
      value: null,
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
  },
  computed: {
      state() {
        return Boolean(this.picked);
      },
      isDisabled() {
        return !this.picked;
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
