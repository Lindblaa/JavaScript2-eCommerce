<template>
    <!-- <button class="btn login" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Login</button> -->
  <NavbarNav/>
  <!-- <CarouselSlides /> -->
  <!-- <LoginModal  /> -->
  <!-- v-if="showModal" @close-modal="showModal = false" -->
  <div class="container mt-5">
    <router-view/>
  </div>
</template>

<script>
// import CarouselSlides from './components/CarouselSlides.vue'
// import LoginModal from './components/LoginModal.vue'
import NavbarNav from './components/NavbarNav.vue'
export default {
  components: {
    NavbarNav
    // CarouselSlides,
    // LoginModal
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #523a3a;
}
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
} */
.navbar {
  padding: 2.5rem;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  color: whitesmoke;
  font-size: 2.2rem;
}
.login {
  color: #acacac;
  font-weight: 600;
  font-size: 1rem;
}
nav a {
  font-weight: bold;
  color: #523a3a;
}
.btn {
  background: none;
  border: none;
  cursor: pointer;
}
nav a.router-link-exact-active {
  /* border-bottom: 2px; */
  color: lightcoral;
}
.link:hover {
  color: #a87b7b;
}
.link.router-link-active::after {
  content: '';
  border-bottom: 2px solid lightcoral;
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 1.2rem;
}
</style>
