<template>
  <OrderProduct v-for="item in shoppingCart" :key="item.product._id" :item="item" />
    <div v-if="shoppingCart.length < 1">
        <div class="kundvagnsdiv p-3 d-flex justify-content-center align-items-center">
        Din varukorg är tom
        </div>
        <!-- <div class="dropdown-divider"></div> -->
    </div>
  <div class="p-3 d-block justify-content-around align-items-center">
        <div>
            <h3>Totalt: {{ shoppingCartTotal }} SEK</h3>
            <small class="text-black">inkl. moms</small>
        </div>
      </div>
</template>

<script>
import OrderProduct from './OrderProduct.vue'
import { mapGetters } from 'vuex'
export default {
    components: { OrderProduct },
    computed: {
        ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
    }
}
</script>

<style>
.kundvagnsdiv {
    color: #d3a0a0;
    font-weight: 500;
}
.btn-kassa {
    padding-inline: 5rem;
    margin-top: 1rem;
    background: #d3a0a0;
}
</style>