import Vue from 'vue'
import Router from 'vue-router'
import firstQuestion from '@/components/firstQuestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstQuestion',
      component: firstQuestion
    }
  ]
})
