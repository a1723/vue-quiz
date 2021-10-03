<template>

    <main class="col-md-6">
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

import firstQuestion from './firstQuestion.vue'

export default {
    name: 'questionPanel',
    components: {
      firstQuestion
    },
    props: ['title'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>

main {
  display: flex;
}

.b-example-divider {
  width: 1.5rem;
  height: 100vh;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.fw-semibold { font-weight: 600; }
.lh-tight { line-height: 1.25; }

</style>
