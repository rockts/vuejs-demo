var app = new Vue({
  el: '#app',
  methods: {
    logMessage() {
      console.log(this.message)
    }
  },
  data: {
    message: 'hold',
    title: 'hello',
    welcome: true
  }
})
