<template>
  <div class="varor p-2 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <div class="image-container">
        <img :src="item.product.image" class="rounded-6 img-fluid">
      </div>
      <div>
        <div><strong>{{ item.product.name }}</strong></div>
        <div><small>{{ item.quantity }} x {{ item.product.price }}</small></div>
      </div>
    </div>
    <div>
      <div class="btn-group btn-group-sm me-2">
        <button class="btn btn-light" @click="minus(item)">-</button>
        <button @click="plus(item)" class="btn btn-light">+</button>
      </div>
      <button @click="removeItem(item)" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i></button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['item', 'product'],
  computed: {
        ...mapGetters(['shoppingCart', 'shoppingCartTotal', 'cartItemCount']),
    },
  methods: {
      ...mapActions(['minus', 'plus', 'removeItem'])
  }
}
</script>

<style scoped>
  .image-container {
    width: 100px;
    margin: .5rem;
  }
  .varor {
      max-width: 90%;
  }
</style>