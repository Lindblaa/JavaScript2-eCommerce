<template>
  <div>
    <h3 class="border-bottom fw-bold mb-5 pb-5">MINA ORDRAR</h3>
    <UserOrder v-for="order in userOrders" :key="order._id" :order="order" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserOrder from '../components/UserOrder.vue'
export default {
  components: { UserOrder },
  computed: {
        ...mapGetters(['userOrders', 'userToken'])
    },
  methods: {
    ...mapActions(['getOrders'])
  },
  created() {
    // console.log(this.order)
    this.getOrders(this.userToken)
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