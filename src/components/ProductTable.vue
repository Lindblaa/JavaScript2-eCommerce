<template>
  <tbody>
    <tr>
      <th scope="row" class="image-container"><img :src="item.product.image" class="rounded-6 img-fluid"></th>
      <td><strong class="">{{ item.product.name }}</strong></td>
      <td><small>{{ item.quantity }}</small></td>
      <td><small>{{ item.product.price }}:-</small></td>
    </tr>
  </tbody>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['cart', 'products'],
  computed: {
        ...mapGetters(['userOrders']),
    },
  methods: {
    ...mapActions(['getOrders'])
  }
}
</script>

<style>
 .image-container {
    width: 95px;
    /* margin: .5rem; */
  }
  .varor {
      max-width: 90%;
  }

</style>