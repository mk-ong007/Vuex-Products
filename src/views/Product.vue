<template>
  <div class="row mt-5">
    <div class="col-4">
      <img :src="product.image" class="w-100" alt="">
    </div>
    <div class="col-8 text-left">
      <h1>{{ product.title }}</h1>
      <h3>${{ product.price }}</h3>

      <input type="text" v-model.number="quantity" class="text-center col-1 mr-2 p-1" />
      <button class="btn btn-primary" @click="addToCartItem">Add to cart</button>

      <p class="mt-4">{{ product.description }}</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: ["id"],
  data(){
    return {
      quantity: 1
    }
  },
  computed: {
    ...mapState('product', ["product"]),
    // product(){
    //   return this.$store.state.product;
    // },

  },
  methods: {
    ...mapActions('cart', ["addToCart"]),
    ...mapActions('product', ["getProduct"]),

    addToCartItem(){
      this.addToCart({
        product: this.product,
        quantity: this.quantity
      });
      // this.$store.dispatch('addToCart', {
      //   product: this.product,
      //   quantity: this.quantity
      // })
    }
  },
  mounted() {
    this.getProduct(this.id);
    // this.$store.dispatch('getProduct', this.id);
  }
}
</script>
