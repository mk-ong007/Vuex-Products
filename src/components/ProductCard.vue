<template>
    <div class="col-3 mt-3">
      <div class="card h-100 text-left">
        <img class="card-img-top" :src="product.image" alt="">
        <div class="card-body">
          <h4 class="card-title">
            <router-link :to="{name: 'Product', params: {id: product.id}}">{{ product.title }}</router-link>
          </h4>
          <strong>${{ product.price }}</strong>
          <p class="card-text">{{ product.description}}</p>
        </div>
        <div class="px-4 pb-3">
          <button @click="addToCartItem" class="btn btn-secondary">Add to cart</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: [ "product" ],
  methods: {
    ...mapActions('cart', ["addToCart"]),
    addToCartItem(){
      this.addToCart({
        product: this.product,
        quantity: 1
      });
      // this.$store.dispatch('addToCart', {
      //   product: this.product,
      //   quantity: 1
      // });
    }
  }
}
</script>

<style>

</style>