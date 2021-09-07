<template>
  <div class="home">
    <ProductDetailsDrawer :product="product" />
    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="prod in items"
        :key="prod.id"
        :product="prod"
        v-on:view-product="viewProduct"
      />
    </div>
  </div>
</template>

<script>
import ProductDetailsDrawer from "../components/product/ProductDetailsDrawer.vue";
import ProductSummaryCard from "../components/ProductSummaryCard.vue";
import { items } from "../data/items";
export default {
  name: "Home",
  components: { ProductSummaryCard, ProductDetailsDrawer },
  data() {
    return {
      items,
      product: null,
    };
  },
  methods: {
    viewProduct(prod) {
      this.product = prod;
      console.log(prod);
    },
  },
};
</script>
<style lang="scss" scoped>
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
