const Home = {
  template: '<h2>首页</h2>'
}

const Event = {
  props: ['id'],
  template: '<h2>活动 {{ id }} </h2>',
  beforeRouteUpdate(to, from, next) {
    console.log(to, from)
    next()
  }
}

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/events',
    component: Event
  },
  {
    path: '/events/:id',
    component: Event,
    props: true
  }
]

const router = new VueRouter({
  routes
})
  const app = new Vue({
  el: '#app',
  router
})
