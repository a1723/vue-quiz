<template>
  <body>
  
    <main>
      <questionPanel /> <!-- Надо бы вынести этот элемент в основную часть, чтобы не вставлять в каждом вопросе -->
      <div class="firstQuestion container">
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

    <footer class="footer mt-auto py-3 bg-light ml-12">
      <div class="container">
        <span class="text-muted">Place sticky footer content here.Place sticky footer content here.Place sticky footer content here.Place sticky footer content here.Place sticky footer content here.Place sticky footer content here.</span>
      </div>
    </footer>
  </body>
</template>

<script>

import questionPanel from './questionPanel.vue'

export default {
  name: 'firstQuestion',
  components: {
    questionPanel
  },
  props: {},
  data() {
    return {
      title: 'firstQuestion',
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

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html {
  height: -webkit-fill-available;
}

main {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}

.b-example-divider {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.bi {
  vertical-align: -.125em;
  pointer-events: none;
  fill: currentColor;
}

.dropdown-toggle { outline: 0; }

.nav-flush .nav-link {
  border-radius: 0;
}

.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: .25rem .5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, .65);
  background-color: transparent;
  border: 0;
}
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, .85);
  background-color: #d2f4ea;
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform .35s ease;
  transform-origin: .5em 50%;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, .85);
}
.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  display: inline-flex;
  padding: .1875rem .5rem;
  margin-top: .125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}
.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold { font-weight: 600; }
.lh-tight { line-height: 1.25; }

</style>
