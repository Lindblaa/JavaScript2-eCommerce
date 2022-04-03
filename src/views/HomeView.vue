<template>
  <div class="home">
  <!-- <LoginModal  /> -->
  <!-- <RegisterModal /> -->
   <div class="top-meddelande mt-3"><p>KÖP 2 BETALA FÖR 1 gäller på ALLA produkter! Rabatten dras av i kassan och ingen kod behövs.</p></div>
   <div class="second-meddelande"><p>Bråttom med din beställning? Välj EXPRESS i kassan och beställ före kl.13:00 så skickas din order samma dag (*gäller vardagar)</p></div>
  </div>

<div class="cards my-5">
    <div class="card hover-shadow shadow-6" style="width: 18rem;">
      <router-link to="/products" class="links text-black">
      <img src="https://media.plazastore.se/2021/06/micropen.jpg" class="card-img-top" alt="Coffe, 15ml"/>
      <div class="card-body">
        <h5 class="card-title fw-bold">Produkter</h5>
        <hr>
        <p class="card-text">Ta dig till våran produktsida och kolla in utbudet. Klicka på kortet så kommer du direkt dit.</p>
    </div>
      </router-link>
    </div>
    <div class="card hover-shadow shadow-5" style="width: 18rem;">
      <router-link to="/products/details/623b43c66989c19d4631fa26" class="links text-black">
      <img src="https://media.plazastore.se/2022/02/Coffe.png" class="card-img-top" alt="Coffe, 15ml"/>
      <div class="card-body">
        <h5 class="card-title fw-bold">Månadens favorit!</h5>
        <hr>
        <p class="card-text">Pigmentet Coffe, 15ml, är månadens favorit bland våra köpare. Klicka här för att komma direkt till produkten.</p>
    </div>
      </router-link>
    </div>
</div>
</template>

<script>
export default {
}
</script>


<style scoped>
.top-meddelande {
  background: lightcoral;
  color: white;
  font-size: 16px;
}
.second-meddelande {
  color: #585858;
  font-size: 12px;
  margin-top: -0.5rem;
}
.cards {
  display: flex;
  justify-content: space-around;
  margin-inline: 5rem;
}
</style>