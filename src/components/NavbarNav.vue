<template>

    <nav class="navbar navbar-expand-sm navbarLink">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse routerlinks" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <router-link class="navbar-brand me-auto mt-2 mt-lg-0 logo" to="/">
          <i class="fa-solid fa-sun"></i><h3 class="logga">PMU</h3>
        </router-link>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-lg-0">
           <div class="routerlinks">
            <router-link to="/" class="link m-4">Home</router-link> |
            <router-link to="/products" class="link m-4">Produkter</router-link> |
            <router-link to="/about" class="link m-4">Om oss</router-link> |
            <router-link to="/kontakt" class="link m-4">Kontakt</router-link>
          </div>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li> -->
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center ms-auto">


        <!-- Notifications -->
        <div class="dropdown">
          
          <a
            class="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-shopping-cart"><p>VARUKORG</p></i>
            <span v-if="cartItemCount" class="badge rounded-pill badge-notification bg-light text-black">{{cartItemCount}}</span>
          </a>
          <div
            class="dropdown-menu dropdown-menu-end shopping-cart"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <ShoppingCart />
          </div>
        </div>
        <!-- Avatar -->
        <div class="dropdown" v-if="loggedIn">
          <a
            class="text-reset dropdown-toggle"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-user"></i>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <router-link class="dropdown-item text-dark" to="/minprofil">Mina ordrar</router-link>
            </li>
            <li>
              <router-link class="dropdown-item loggaut" @click="logout" to="/login">Logga ut</router-link>
            </li>
          </ul>
        </div>
        <router-link to="/login" class="nav-link text-dark btn login" data-mdb-target="#exampleModalToggle1" data-mdb-toggle="modal" v-else>Logga in</router-link>
      </div>
      <LoginModal />
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>

  <!-- <LoginModal  />  -->
  <!-- v-if="showModal" @close-modal="showModal = false" -->

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoginModal from './LoginModal.vue'
import ShoppingCart from './ShoppingCart.vue'


export default {
  components: {
    ShoppingCart,
    LoginModal
  },
  computed: {
    ...mapGetters(['loggedIn', 'cartItemCount'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>


<style>
/* .navbar {
  padding: 2.5rem;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
.logga {
  color: rgb(216, 186, 186);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.8rem;
}
.loggaut {
  color: #a5a5a5;
}
.fas, .fa-user, .fa-solid {
  color: rgba(240, 128, 128, 0.856);
}
.fa-sun {
  padding-bottom: 0.5rem;
  margin-right: .5rem;
  color: lightcoral;
}
.login {
  color: #acacac;
  font-weight: 600;
  font-size: 1rem;
}
.navbarLink {
  font-weight: bold;
  color: #3b1820e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  background: none;
  border: none;
  cursor: pointer;
}
.navbarLink.router-link-exact-active {
  /* border-bottom: 2px; */
  color: lightcoral;
}
.link:hover {
  color: #a5a5a5;
}
.link.router-link-active::after {
  content: '';
  border-bottom: 2px solid lightcoral;
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 1.2rem;
}
.shopping-cart {
  min-width: 450px;
  background: rgba(119, 63, 63, 0.931);
}
</style>
