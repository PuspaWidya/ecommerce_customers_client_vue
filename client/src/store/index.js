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
    changeLoggedIn (state) {
      if (localStorage.access_token) {
        state.loggedIn = true
      } else {
        state.loggedIn = false
      }
    },
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
          router.push('/home')
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
    fetchProducts(context, payload) {
      axios({
        method: 'get',
        url: url + 'server',
        headers: {
          access_token : localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        if (data) {
          context.commit('fetchProducts',data)
          console.log('berhasil di fetch!')
          console.log(state.products)
        } else {
          console.log('tidak ada data')
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart(context,payload) {
      axios({
        method: 'delete',
        url: url + `server/${payload.id}`,
        headers: {
          access_token : localStorage.getItem('access_token')
        },
        data :{
          ProductId : payload.ProductId
        }
      }).then(_ => {
          console.log('data has been deleted')
          router.push('/home')
      })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      axios({
        method: 'post',
        url: '/server',
        headers: {
          acess_token: localStorage.getItem('access_token')
        },
       data:payload
      })
        .then(({ data }) => {
          console.log(data)
          console.log('berhasil di buat?')
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  modules: {
  }
})
