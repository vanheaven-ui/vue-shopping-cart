import { createStore } from 'vuex'

const updateLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: []
  },
  getters: {
    productQuantity: state => product => {
      const item = state.cart.find(i => i.id === product.id)

      if (item) return item.quantity
      else return null
    },

    cartItems: state => {
      return state.cart
    },

    cartTotal: state => {
      return state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    }
  },
  mutations: {
    addToCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)
      if(item) {
        item.quantity++
      } else {
        state.cart.push({...product, quantity: 1})
      }

      updateLocalStorage(state.cart)
    },

    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
