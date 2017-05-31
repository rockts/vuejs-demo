Vue.component('comment', {
  props: ['comment'],
  template: '<li>{{ comment.content }}</li>',
})
var app = new Vue({
  el: '#app',
  data: {
    comments: [
      { content: 'nice ~'},
      { content: 'great ~'},
      { content: 'swesome ~'},
    ]
  }
})
