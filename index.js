const Home = {
  template: '<h2>首页</h2>'
}

const Event = {
  props: ['id'],
  template: `
    <div>
      <h2>活动 {{ id }} </h2>
      <router-view></router-view>
    </div>
  `,
  beforeRouteUpdate(to, from, next) {
    console.log(to, from)
    next()
  }
}

const Comment = {
  template: `
    <div>
      <hr class="ui section divider">
        <h2>评论</h2>
    </div>
  `
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
    props: true,
    children: [
      {
        path: 'comments',
        component: Comment
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
  const app = new Vue({
  el: '#app',
  router
})
