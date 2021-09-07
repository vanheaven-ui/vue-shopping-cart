<template>
  <h2>The drawer</h2>
  <div v-if="!product">Product is yet to be known</div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style lang="scss">
</style>