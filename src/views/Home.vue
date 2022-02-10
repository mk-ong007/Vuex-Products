<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>
