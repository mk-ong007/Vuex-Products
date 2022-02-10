<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/product">Product</router-link>
    </div>
    <div style="position: absolute; left: 10px; top: 10px">
      <div class="dropdown open">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ cart.length }} Cart
        </button>
        <div @click="$event.stopPropagation()">
          <mini-cart :cart="cart" />
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import MiniCart from "@/components/MiniCart.vue";
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    MiniCart,
  },
  computed: {
    ...mapState('cart', ['cart']),
    // cart() {
    //   return this.$store.state.cart;
    // },
  },
  methods: {
    ...mapActions('cart', ["getCart"])
  },
  mounted() {
    this.getCart();
    // this.$store.dispatch("getCart");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
