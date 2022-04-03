import axios from '@/axios'

export default {
  state: {
      userOrders: [],
      success: false,
      order: null
  },
  getters: {
      userOrders: state => state.userOrders,
      order: state => state.order
  },
  mutations: {
      SET_ORDER: (state) => {
          state.success = true
      },
      GET_ORDERS: (state, orders) => {
          state.userOrders = orders
      },
      SET_SINGLE_ORDER: (state, data) => {
          state.order = data
      }
  },
  actions: {
      saveOrder: async ({commit}, {order}) => {
        console.log(order)
        const res = await axios.post('http://localhost:9090/api/orders',
        {cart: order.cart, total: order.total, quantity: order.quantity}, {
            headers: {
                'Authorization': `Bearer ${order.user}`
            }
        })

        if(res.status === 201) {commit('SET_ORDER')}
      },
      getOrders: async ({commit}, token) => {
          const res = await axios.get('http://localhost:9090/api/orders', {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          })
          commit('GET_ORDERS', res.data)
      },
      getOrderById: async ({commit}, id) => {
        console.log(id)
        const res = await axios.get('orders/' + id)
        commit('SET_SINGLE_ORDER', res.data)
      }
  }
}
