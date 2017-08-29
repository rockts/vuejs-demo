const mapGetters = Vuex.mapGetters
const mapActions = Vuex.mapActions

const store = new Vuex.Store({
  state: {
    count: []
  },
  mutations: {
    add(state, payload) {
      state.count.push(payload)
    },
    remove(state) {
      state.count.pop()
    },
    setCount(state, payload) {
      state.count = payload
    }
  },
  getters: {
    sum(state) {
      return state.count.reduce((a, b) => a + b, 0)
    },
    total(state) {
      return state.count.length
    },
    average(atate, getters) {
      return +(getters.sum / getters.total * 100 /100).toFixed(1)
    }
  },
  actions: {
    getCount(context) {
      return axios.get('http://localhost:8080/api/count')
        .then((response) => {
          context.commit('setCount', response.data.count)
        })
    },
    addCount({ commit }, payload) {
      return axios.post('http://localhost:8080/api/count', {
        number: payload
      })
      .then((response) => {
        commit('add', payload)
      })
    },
    removeCount({ commit }) {
      return axios.delete('http://localhost:8080/api/count')
        .then((response) => {
          commit('remove')
        })
    }
  }
})

const AddButton = {
  template: `
    <button class="ui button" @click="add">Add</button>
  `,
  methods: {
    ...mapActions([
      'addCount'
    ]),
    add() {
      this.addCount(Math.floor(Math.random() * (10 - 1) + 1))
    }
  }
}

const RemoveButton = {
  template: `
    <button class="ui button" @click="remove">Remove</button>
  `,
  methods: {
    ...mapActions([
      'removeCount'
    ]),
    remove() {
      this.removeCount()
    }
  }
}

const Counter = {
  template: `
    <div>
      <add-button></add-button>
      <remove-button></remove-button>
      <div class="ui red circular label">
        {{ average }}
      </div>
      <div class="ui divider"></div>
      total: {{ total }} projects <br> sum: {{ sum }}
    </div>
  `,
  components: { AddButton, RemoveButton },
  computed: {
    ...mapGetters([
      'sum',
      'total',
      'average'
    ])
  },
  methods: {
    ...mapActions([
      'getCount'
    ])
  },
  mounted() {
    this.getCount()
  }
}

const app = new Vue({
  el: '#app',
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
