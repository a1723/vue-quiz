import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import questions from '@/components/questions'
import questionsResults from '@/components/questionsResults'


Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'questions',
      component: questions
    },
    {
      path: '/questionsResults',
      name: 'questionsResults',
      component: questionsResults
    },
  ]
})
