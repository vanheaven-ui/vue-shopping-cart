<template>
  <div class="cart-item-card">
    <div class="header">
      <h3>{{ product.name }}</h3>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>TotalCost: ${{ item_cost.toFixed(2) }}</h4>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    item_cost() {
      return this.product.price * this.product.quantity;
    },
    description() {
      return this.product.description.substring(0, 60) + "...";
    },
  },
};
</script>

<style lang="scss">
.cart-item-card {
  width: 90%;
  margin: 5% auto;
  background-color: white;
  box-shadow: 0 0 5px gray;
  padding: 10px;
  text-align: left;
  border-radius: 5px;
}

.header {
  display: flex;
  justify-content: space-around;
}
</style>