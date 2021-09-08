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
    }
  },
  mutations: {
    addToCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)
      if(item) {
        item.qauntity++
      } else {
        state.cart.push({...product, quantity: 1})
      }

      updateLocalStorage(state.cart)
    }
  },
  actions: {
  },
  modules: {
  }
})
