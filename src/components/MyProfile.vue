<template>
  <div>
    <h3 class="border-bottom fw-bold mb-5 pb-5">MIN ORDER</h3>
     <table class="table ">
      <thead class="toptext">
        <tr>
          <th scope="col"> </th>
          <th scope="col">PRODUKT</th>
          <th scope="col">ANTAL</th>
          <th scope="col">PRIS</th>
        </tr>
      </thead>
        <OrderCard v-for="item in shoppingCart" :key="item.product._id" :item="item" />
    </table>
    <div>
      <div class="fw-bold pt-3">Totalt: {{ shoppingCartTotal }} SEK</div>
      <small class="text-black">inkl. moms</small>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrderCard from './UserOrder.vue'
export default {
  components: { OrderCard },
  props: (['item']),
  computed: {
        ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
    }
}
</script>

<style>
.toptext {
  color: lightcoral;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
}
 .topline {
    border-bottom: 1px solid lightcoral;
  }
</style>