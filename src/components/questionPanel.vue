<template>

    <main>
      <div class="b-example-divider"></div>
        <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 380px;">
          <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
            <span class="fs-5 fw-semibold">Questions</span>
          </a>
          <div class="list-group list-group-flush border-bottom scrollarea">
            <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">firstQuestion</strong>
                <small>Wed</small>
              </div>
              <div class="col-10 mb-1 small">firstQuestion text</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">secondQuestion</strong>
                <small class="text-muted">Tues</small>
              </div>
              <div class="col-10 mb-1 small">secondQuestion text</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">thirdQuestion</strong>
                <small class="text-muted">Mon</small>
              </div>
              <div class="col-10 mb-1 small">thirdQuestion text</div>
            </a>

            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">fourthQuestion</strong>
                <small class="text-muted">Wed</small>
              </div>
              <div class="col-10 mb-1 small">fourthQuestion text</div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">fifthQuestion</strong>
                <small class="text-muted">Tues</small>
              </div>
              <div class="col-10 mb-1 small">fifthQuestion text</div>
            </a>

          </div>
        </div>
      <div class="b-example-divider"></div>
    </main>

</template>

<script>

export default {
    name: 'questionPanel',
    data() {
        return {
            questionPanel: 'questionPanel'
        }
    }
}
</script>

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
  flex-grow: 0;
  flex-shrink: 0;  
  flex-wrap: nowrap;
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}

.b-example-divider {
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