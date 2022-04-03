<template>
  <div class="my-2 row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 g-4">
    <SingleProduct v-for="product in products" :key="product._id" :product="product" class="ml-2" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SingleProduct from './SingleProduct.vue'
export default {
  components: { SingleProduct },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style>

</style>