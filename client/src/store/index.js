import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
const url = 'http://localhost:3000/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    loggedIn: false,
    products: []
  },
  mutations: {
    fetchCart (state, payload) {
      state.cart = payload
    },
    fetchProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'post',
        url: url + 'login',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(({ data }) => {
        if (data) {
          localStorage.setItem('access_token', data.access_token)
          console.log('berhasil logged in!')
          router.push('/products')
        } else {
          console.log('wrong email or password')
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
      axios({
        method: 'post',
        url: url + 'register',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(data => {
        if (data) {
          console.log('berhasil register!')
          router.push('/')
        } else {
          console.log('wrong email or password')
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    logout (context) {
      localStorage.removeItem('access_token')
      router.push('/')
    },
    fetchProduct (context, payload) {
      axios({
        method: 'get',
        url: url + 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        console.log('asasaaa')
        if (data) {
          context.commit('fetchProducts', data)
        } else {
          console.log('tidak ada data')
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart (context, payload) {
      axios({
        method: 'get',
        url: url + 'server',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        console.log('chart jalan')
        if (data) {
          context.commit('fetchCart', data)
          console.log('berhasil di fetch!')
          console.log(data)
        } else {
          console.log('tidak ada data')
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, payload) {
      axios({
        method: 'delete',
        url: url + 'server',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          ProductId: payload.ProductId,
          id: payload.id
        }
      })
        .then(_ => {
          console.log('data has been deleted')
          // router.push('/products') //!
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      axios({
        method: 'post',
        url: url + 'server/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          id: payload
        }
      })
        .then(({ data }) => {
          console.log(data)
          console.log('berhasil di buat')
          // ?
          // this.$router.go('/products')
          // this.$router.reload()
          // this.history.current()
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart (context, payload) {
      axios({
        method: 'patch',
        url: url + 'server',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          id: payload.id,
          amount: payload.amount,
          ProductId: payload.ProductId
        }
      })
        .then(({ data }) => {
          console.log(data)
          console.log('berhasil di update?')
          //!
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
