<template>
  <div>
  <!-- <LoginModal /> -->
   <MultiProducts /> 
  </div>
    <!-- </router-link> -->
</template>

<script>
import { mapActions } from 'vuex'
import MultiProducts from '../components/MultiProducts.vue'
// import SingleProduct from '../components/SingleProduct.vue'
// import { mapActions, mapGetters } from 'vuex'
export default {
  components: { MultiProducts },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>

<style>
/* .productsGallery {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.gallery {
  margin: 5px;
  border: 1px solid rgba(255, 255, 255, 0.479);
  border-radius: 1rem;
  float: left;
  width: 180px;
}

.gallery:hover {
  border: 1px solid rgba(240, 128, 128, 0.452);
  box-shadow: 1px 3px 7px lightcoral;
  border-radius: 1rem;
}

.gallery img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}

.desc {
  padding: 15px;
  background: rgb(240, 128, 128);
  color: white;
  border-radius: 0 0 1rem 1rem;
  text-align: center;
} */
</style>