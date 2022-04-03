import axios from '@/axios'
import router from '@/router'


export default {
  state: {
      users: [],
      userToken: null,
      loggedIn: false
  },
  getters: {
      loggedIn: state => state.loggedIn,
      userToken: state => state.userToken
      
  },
  mutations: {
      SET_USER: (state, token) => {
          if(token) {
              state.userToken = token
              state.loggedIn = true
          }
          else {
              state.loggedIn = false,
              state.userToken = null
          }
      },
      REGISTER_USER: (state, token) => {
          state.userToken = token
          state.loggedIn = true
      }
  },
  actions: {
      login: async ({commit}, user) => {
          const res = await axios.post('http://localhost:9090/api/users/login', user)
          console.log(res)
          if(res.status === 200) {
              localStorage.setItem('token', res.data.token)
              commit('SET_USER', res.data.token)

            router.push({name: 'home' })
          } else {
              console.log('Något gick fel, var god försök igen.')
          }
      },
      logout: ({commit}) => {
          try {
              localStorage.removeItem('token')
              commit('SET_USER', null)
          }
          catch {
              console.log('Not logged in')
          }
      },
      userCheck: ({commit}) => {
          let token = localStorage.getItem('token')
          if(token) {
              commit('SET_USER', token)
          }
      },
      register: async ({commit}, payload) => {
          const res = await axios.post('http://localhost:9090/api/users/register', payload)
          console.log(payload)
          console.log(res)
          commit('REGISTER_USER', res.data.token)
          router.push({name: 'home'})
      }
  }
}
