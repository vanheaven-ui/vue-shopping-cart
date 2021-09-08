<template>
  <div class="cart-item-card">
    <h2>Cart Total: ${{ cart_total }}</h2>
    <button class="view-product-button">Pay by Credit CartItemCard</button>
  </div>
</template>

<script>
export default {
  computed: {
    cart_total() {
      return this.$store.getters.cartTotal;
    },
  },
};
</script>

<style>
</style>