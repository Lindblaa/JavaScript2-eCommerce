<template>
  
  <tbody>
    <tr class="border-bottom">
        <td><img :src="item.product.image"></td>
        <th scope="col"> {{ item.product.price }} SEK </th>
        <th scope="col"> {{ item.quantity }} </th>
        <th scope="col"> {{ item.product.price * item.quantity }} SEK </th>
    </tr>
  </tbody>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['item'],
  computed: {
    ...mapGetters(['userOrders'])
  },
  methods: {
    ...mapActions(['getOrderById'])
  },
  created() {

  }
};
</script>

<style scoped>
/* th {
  width: 30px;
} */
img {
  max-width: 100px;
  /* color: #fff;
  background: none;
  object-fit: contain; */
}
 tr {
   height: 170px;
 }
</style>