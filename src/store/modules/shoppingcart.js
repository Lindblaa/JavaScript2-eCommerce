export default {
    state: {
      cart: []
    },
    getters: {
      shoppingCart: state => state.cart,
      cartItemCount: state => {
        let items = 0
        state.cart.forEach(item => {
          items += item.quantity
        })
        return items
      },
      shoppingCartTotal: state => {
        let total = 0
        if(state.cart.length !== 0) {
          state.cart.forEach(item => {
            total += item.product.price * item.quantity
          })
        }
        return total
      }
    },
    mutations: {
      ADD_TO_CART: (state, { product, quantity }) => {
        let exist = state.cart.find(item => item.product._id === product._id)
        if(exist) {
          exist.quantity += quantity
          return
        }
        state.cart.push({ product, quantity })
      },
      REMOVE_ITEM_FROM_CART: (state, product) => {
        state.cart = state.cart.filter(item => item.product._id !== product.product._id)
      },
      EMPTY_CART: (state) => {
        state.cart = []
      },
      MINUS_QUANT: (state, product) => {
        product.quantity -= 1
        if(product.quantity === 0) {
          state.cart = state.cart.filter(item => item.product._id !== product.product._id)
        }
      },
      PLUS_QUANT: (state, product) => {
        product.quantity += 1
      }
    },
    actions: {
      addToCart: ({commit}, { product, quantity }) => {
        commit('ADD_TO_CART', { product, quantity })
      },
      removeItem: ({commit}, product) => {
        commit('REMOVE_ITEM_FROM_CART', product)
      },
      emptyCart: ({commit}) => {
        commit('EMPTY_CART')
      },
      minus: ({commit}, product) => {
        commit('MINUS_QUANT', product)
      },
     plus:  ({commit}, product) => {
      commit('PLUS_QUANT', product)
      }
    }
  }
  