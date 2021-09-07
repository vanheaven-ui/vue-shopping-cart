<template>
  <div class="home">
    <div class="product-cards-container">
      <ProductSummaryCard />
    </div>
  </div>
</template>

<script>
import ProductSummaryCard from "../components/ProductSummaryCard.vue";
import items from "../data/items";
export default {
  name: "Home",
  components: { ProductSummaryCard },
  data() {
    return {
      items,
    };
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
