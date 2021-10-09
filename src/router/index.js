import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Guide from '../components/Guide.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  }, {
    path: '/guide',
    component: Guide
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
