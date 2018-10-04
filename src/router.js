import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Event from './views/Event.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/events'
    },
    {
      path: '/events',
      name: 'home',
      component: Home
    },  
    { path: '/event/:id',
      name:'event-details',
     component: Event,
     props: true
    }
   
  ]
})
