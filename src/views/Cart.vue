<template>
  <h1>Your Cart</h1>
  <!-- <div v-for="item in items" :key="item.id">{{ item.name }}</div> -->
  <CartItemCard v-for="item in items" :key="item.id" :product="item" />
  <CartSummaryPaymentCard />
</template>

<script>
import CartItemCard from "../components/CartItemCard.vue";
import CartSummaryPaymentCard from "../components/CartSummaryPaymentCard.vue";
export default {
  components: { CartItemCard, CartSummaryPaymentCard },
  name: "Cart",
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style>
</style>