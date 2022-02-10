<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right:0; left:auto;"
    aria-labelledby="triggerId"
  >
    <div>
      <div v-for="onecart in cart" :key="onecart.id" class="p-2 d-flex justify-content-between border-top">
        <div>
          <strong>{{ onecart.product.title }}</strong>
          <br />
          {{ onecart.quantity }} x ${{ onecart.product.price }}
        </div>
        <div>
          <a class="btn" @click.prevent="removeCartItem(onecart)">
            <b-icon icon="trash-fill" variant="danger"></b-icon>
          </a>
        </div>
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span>Total: ${{ cartTotalPrice }}</span>
      <a class="btn text-danger" @click.prevent="clearCart">Clear Cart</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: [ "cart" ],
  computed: {
    ...mapGetters('cart', ["cartTotalPrice"])
    // totalAmount() {
    //   return this.$store.getters.totalAmount;
    // }
  },
  methods: {
    ...mapActions('cart', ["removeCart", "clearCart"]),

    removeCartItem(cartItem){
      this.removeCart(cartItem);
      // this.$store.dispatch('removeCart', cartItem);
    },
    // clearCartItems(){
    //   this.$store.dispatch('clearCart');
    // }
  }
};
</script>

<style>
</style>