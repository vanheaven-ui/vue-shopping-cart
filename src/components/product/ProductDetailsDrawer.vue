<template>
  <div class="drawer-background">
    <h2>Product description drawer</h2>
  </div>
  <div class="drawer">
    <div class="drawer-close">x</div>
    <div class="product-details" v-if="product">
      <h3 class="text-center">{{ product.name }}</h3>
      <p class="description">{{ product.description }}</p>
      <h3>${{ product.price }}</h3>
      <div class="cart-total" v-if="product_total">
        <h3>In Cart</h3>
        <h4>{{ product_total }}</h4>
      </div>
      <div class="button-container">
        <button class="remove">Remove</button>
        <button class="add">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],

  computed: {
    product_total() {
      return 5;
    },
  },
};
</script>

<style lang="scss">
</style>