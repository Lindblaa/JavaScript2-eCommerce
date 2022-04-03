<template>
  <div class="p-2 text-white d-flex justify-content-between align-items-center">
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
        <button class="btn btn-dark" @click.stop="minus(item)">-</button>
        <button @click.stop="plus(item)" class="btn btn-dark">+</button>
      </div>
      <button @click.stop="removeItem(item)" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i></button>
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
    width: 85px;
    margin: .5rem;
  }
 
</style>