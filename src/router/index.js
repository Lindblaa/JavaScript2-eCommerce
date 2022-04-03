import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import LoginModal from '../components/LoginModal.vue'
import MinProfil from '../views/MinProfil.vue'
import CartView from '../views/CartView.vue'
import SingleOrderView from '../views/SingleOrderView.vue'
import AboutView from '../views/AboutView.vue'
import KontaktView from '../views/KontaktView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: KontaktView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginModal
  },
  {
    path: '/minprofil',
    name: 'minprofil',
    component: MinProfil
  },
  {
    path: '/cartview',
    name: 'cartview',
    component: CartView
  },
  {
    path: '/singleorder/:id',
    name: 'singleorder',
    props: true,
    component: SingleOrderView
  },
  {
    path: '/products/details/:id',
    name: 'productDetails',
    component: ProductDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
