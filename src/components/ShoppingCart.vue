<template>
  <CartProduct v-for="item in shoppingCart" :key="item.product._id" :item="item" />
    <div v-if="shoppingCart.length < 1">
        <div class="kundvagnsdiv p-3 d-flex justify-content-center align-items-center">
        Din kundvagn är tom
        </div>
        <div class="dropdown-divider"></div>
    </div>
  <div class="px-4 pb-3 d-block justify-content-between align-items-center text-white">
        <div>
            <div>Totalt: {{ shoppingCartTotal }} SEK</div>
            <small class="text-black">inkl. moms</small>
        </div>
      <div class="text-center">
        <router-link to="/cartview"><button class="btn btn-dark btn-kassa">Gå till varukorgen</button></router-link>
        <router-link to="/cartview"><button class="btn btn-dark">Gå till betalning</button></router-link>
      </div>
  </div>
</template>

<script>
import CartProduct from './CartProduct.vue'
import { mapGetters } from 'vuex'

export default {
    components: { CartProduct },
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
    margin-bottom: .5rem;
}

</style>