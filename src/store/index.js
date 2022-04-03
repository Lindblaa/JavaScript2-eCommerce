import { createStore } from 'vuex'
import products from './modules/products'
import user from './modules/user'
import shoppingcart from './modules/shoppingcart'
import orders from './modules/orders'


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    user,
    shoppingcart,
    orders
  }
})
