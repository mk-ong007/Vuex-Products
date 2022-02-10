<template>
  <div class="d-flex align-display-stretch flex-wrap">
    <product-card v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  computed: {
    ...mapState('product', ["products"]),
    // products() {
    //   return this.$store.state.products;
    // }
  },
  mounted() {
    this.getProducts();
    // this.$store.dispatch('getProducts');
  },
  methods: {
    ...mapActions('product', ["getProducts"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
