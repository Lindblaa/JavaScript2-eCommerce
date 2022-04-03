<template>
<!-- <SingleOrder v-for="(item, index) in order.cart" :key="item._id" :item="item" :index="index" /> -->
  <div class="container card w-50 mb-3 hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="dark">
    <router-link :to="{ name: 'singleorder', params: { id: order._id }}">
      <div class="mask rounded" style="background-color: rgba(240, 63, 63, 0.311)"></div>
      <table class="table mt-3">
        <thead class="order-text text-center">
            <p class="fw-bold">ORDERNUMMER:</p>
            <p class="ordernr ">{{order._id}}</p>
        </thead>
      <div class="">
        <p class="textfärg fw-bold justify-content-between align-items-center">Antal produkter: {{ order.quantity }}</p>
        <p class="textfärg fw-bold justify-content-between align-items-center border-bottom pb-3">Total summa: {{ order.total }} SEK</p>
      </div>
          <th class="d-flex text-center justify-content-center gråfärg">Orderdatum {{order.createdAt.slice(0,10)}}</th>
      </table>
    </router-link>
  </div>
        
</template>

<script>
// import SingleOrder from './SingleOrder.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['item', 'index', 'order', 'id'],
  // components: { SingleOrder },
  computed: {
    ...mapGetters(['shoppingCartTotal', 'userOrders'])
  },
  methods: {
    ...mapActions(['getOrderById'])
  },
  created() {
    
  }
};
</script>

<style>
.ordernr {
  color: lightcoral;
  /* margin-left: -1.5rem; */
  font-size: 16px;
  margin-top: -1rem;
  border-bottom: 1px solid rgba(233, 222, 222, 0.26);
}
.textfärg {
  color: rgb(131, 77, 77);
}
.gråfärg {
  color: rgb(173, 173, 173);
}
  .varor {
      max-width: 90%;
  }

</style>