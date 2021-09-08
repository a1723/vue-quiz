import Vue from 'vue'
import Router from 'vue-router'
import firstQuestion from '@/components/firstQuestion'
import secondQuestion from '@/components/secondQuestion'
import thirdQuestion from '@/components/thirdQuestion'
import fourthQuestion from '@/components/fourthQuestion'
import fifthQuestion from '@/components/fifthQuestion'
import questionsResults from '@/components/questionsResults'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'firstQuestion',
      component: firstQuestion
    },
    {
      path: '/2',
      name: 'secondQuestion',
      component: secondQuestion
    },
    {
      path: '/3',
      name: 'thirdQuestion',
      component: thirdQuestion
    },
    {
      path: '/4',
      name: 'fourthQuestion',
      component: fourthQuestion
    },
    {
      path: '/5',
      name: 'fifthQuestion',
      component: fifthQuestion
    },
    {
      path: '/questionsResults',
      name: 'questionsResults',
      component: questionsResults
    },
  ]
})
