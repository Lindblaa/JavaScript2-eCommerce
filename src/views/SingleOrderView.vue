<template>
<div class="toptext"><h5>SPECIFIKATION ORDER: </h5>{{order._id}}</div>
<br>
<br>
  <table>
    <thead class="toptext border-bottom">
          <th class="col-4"> </th>
          <th class="col-4">á-pris</th>
          <th class="col-4">Antal</th>
          <th class="col-4">Totalpris</th>
      </thead>
    <!-- {{order.cart}} -->
    <SingleOrder v-for="item in order.cart" :key="item._id" :item="item" />
    <!-- <SingleOrder /> -->
  </table>
</template>

<script>
import SingleOrder from '../components/SingleOrder.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { SingleOrder },
  props: ['id'],
  computed: {
    ...mapGetters(['userOrders', 'order'])
  },
  methods: {
    ...mapActions(['getOrderById'])
  },
  created() {
    // console.log(id)
    this.getOrderById(this.id)
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