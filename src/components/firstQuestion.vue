<template>
  <body>
      <header class="p-3 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
              <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
              <li><a href="#" class="nav-link px-2 text-white">About</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
            </form>

            <div class="text-end">
              <button class="btn btn-outline-light me-2 btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
              <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>


    <!--MODAL-->

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-bs-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button class="btn-close" data-bs-dismiss="modal" aria-bs-label="close"></button>
              </div>
              <div class="modal-body">
                  <form>
                      <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1">
                      </div>
                      <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1">
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
              </div>
          </div>
      </div>
  </div>

      <!--MODAL-->

      </header>

    <main>
      <div class="b-example-divider"></div>
        <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 380px;">
          <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
            <span class="fs-5 fw-semibold">List group</span>
          </a>
          <div class="list-group list-group-flush border-bottom scrollarea">
            <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small>Wed</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Tues</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Mon</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>

            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Wed</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Tues</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Mon</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Wed</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Tues</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Mon</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Wed</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Tues</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Mon</small>
              </div>
              <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
            </a>
          </div>
        </div>
      <div class="b-example-divider"></div>


      <div class="firstQuestion container">
        <h1>{{ title }}</h1>
        <b-form-group v-model="picked" :state="state" name="radio-validation" >
          <b-form-radio v-model="picked" value="Один">Один</b-form-radio>
          <input type="radio" id="two" value="Два" v-model="picked">
          <label for="two">Два</label>
          <br>
          <input type="radio" id="three" value="Три" v-model="picked">
          <label for="three">Три</label>
          <br>
          <input type="radio" id="four" value="Четыре" v-model="picked">
          <label for="four">Четыре</label>
          <br>
          <b-form-invalid-feedback :state="state">Please select one</b-form-invalid-feedback>
          <div class="mt-2">Выбрано: <strong>{{ picked }}</strong></div>
          <router-link to="/2"><button :disabled='isDisabled' @click="nextQuestion">Принять ответ и перейти к следующему вопросу</button></router-link>
          </b-form-group>
      </div>

    </main>
  </body>
</template>

<script>
export default {
  name: 'firstQuestion',
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
