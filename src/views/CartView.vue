<template>
  <div class="varukorg mb-5">
    <h2 class="border-bottom display-6">DIN VARUKORG</h2>
    <DinVarukorg />
    <router-link to="/minprofil"><button @click="handleSaveOrder()" class="text-black btn btn-dark btn-kassa">Gå till betalning</button></router-link>
  </div>
</template>

<script>
  import DinVarukorg from '../components/DinVarukorg.vue'
  import { mapGetters, mapActions } from 'vuex'

export default {
    components: { DinVarukorg },
  methods: {
    ...mapActions(['saveOrder', 'emptyCart']),
    async handleSaveOrder() {
      console.log(this.shoppingCart)
      if(this.shoppingCart.length < 1) {
        return this.error = true
      }
      else {
        let order = {
          cart: this.shoppingCart,
          user: this.userToken,
          quantity: this.cartItemCount,
          total: this.shoppingCartTotal
        }
        await this.saveOrder({order})
        this.emptyCart()
      }
    }
  },
    computed: {
        ...mapGetters(['shoppingCart', 'shoppingCartTotal', 'cartItemCount', 'userToken'])
    }
}
</script>

<style>

</style>