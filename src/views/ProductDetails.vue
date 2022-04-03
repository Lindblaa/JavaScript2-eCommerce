<template>
<div class="d-flex align-items-start"><router-link class="toptext link-dark" to="/products"> ← Tillbaka till produkterna</router-link></div>
  <div v-if="product" class="card">
    <div class="bg-image hover-overlay ripple d-flex" data-mdb-ripple-color="light">
      <img :src="product.image" class="img-fluid w-50 p-3"/>
        <!-- <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div> -->
    <div class="card-body">
      <h5 class="card-title text-white py-3 mt-4">{{product.name}}</h5>
        <div class="price py-3">
          <p class="card-text pt-2 fw-bold h4">{{product.price}} SEK</p>
          <button type="button" @click="addToCart({ product, quantity })" class="btn hover-shadow mb-3"><i class="fa-solid fa-cart-plus"></i> Lägg till i varukorg</button>
        </div>
          <div class="mt-4">
            <p>{{product.desc}}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getProductById', 'addToCart'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProductById(this.id)
  }
}
</script>

<style scoped>
.card-title {
  background: lightcoral;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.price {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid lightcoral;
}

</style>