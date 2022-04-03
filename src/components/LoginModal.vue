<template>

<!-- Modal -->
<div class="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div v-if="isLogin" class="modal-content">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="loginTitle">Logga in</h5>
        <button type="button" class="btn-close btn-danger d-flex align-items-center justify-content-center" data-mdb-dismiss="modal" aria-label="Close">X</button>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="modal-body">
          <div class="form-outline">
            <label class="form-label d-flex" for="email">Email</label>
            <input type="email" id="email" class="form-control border" v-model="email"/>
          </div>
          <div class="form-outline mt-2">
            <label class="form-label d-flex" for="pwd">Lösenord</label>
            <input type="password" id="pwd" class="form-control border" v-model="password"/>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="isLogin = false">Registrera ny användare</button>
          <button type="submit" class="btn btn-success" data-mdb-dismiss="modal">Logga in</button>
          <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Stäng</button>
        </div>
      </form> 
    </div>



    <div v-else class="modal-content">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalToggleLabel22">Registrera ny användare</h5>
        <button type="button" class="btn-close bg-danger d-flex align-items-center justify-content-center" data-mdb-dismiss="modal" aria-label="Close">X</button>
      </div>
      <form @submit.prevent="handleRegister">
        <div class="modal-body">
          <div class="form-outline mb-2">
            <label class="form-label d-flex" for="registerFirstName">Förnamn</label>
            <input type="text" id="registerFirstName" class="form-control border" v-model="firstName"/>
          </div>
          <div class="form-outline mb-2">
            <label class="form-label d-flex" for="registerLastName">Efternamn</label>
            <input type="text" id="registerLastName" class="form-control border" v-model="lastName"/>
          </div>
          <div class="form-outline mb-2">
            <label class="form-label d-flex" for="registerEmail">Email</label>
            <input type="email" id="registerEmail" class="form-control border" v-model="email"/>
          </div>
          <div class="form-outline">
            <label class="form-label d-flex" for="registerPwd">Lösenord</label>
            <input type="password" id="registerPwd" class="form-control border" v-model="password"/>
          </div>
            <h5 class="text-danger text-center" v-if="error">Du måste fylla i alla fält!</h5>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-success">Lägg till användare</button>
          <button type="button" class="btn btn-primary" @click="isLogin = true">
            Tillbaka till inloggning
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- <RegisterModal /> -->

<!-- Second modal dialog
<div class="modal fade" id="exampleModalToggle22" aria-hidden="true" aria-labelledby="exampleModalToggleLabel22" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    
  </div>
</div> -->
</template>

<script>
import { mapActions } from 'vuex'
// import RegisterModal from '../components/RegisterModal.vue'
export default {
    data() {
      return {
        user: {
        email: '',
        password: '',
        
        },
        isLogin: true,
        newUser: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          error: false
        }
      }
  },
  methods: {
    ...mapActions(['login', 'register']),
    handleLogin() {
      if(this.email.trim() === '' || this.password.trim() === '') {
        return
      }

      let user = {
        email: this.email,
        password: this.password
      }

      this.login(user)
    },
    handleRegister() {
            if(this.firstName.trim() === '' || this.lastName.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
              this.error = true
            }
            else {
              let newUser = {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              password: this.password
              }
              console.log(newUser)
              this.register(newUser)
              this.error = false
            }
    },
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
  .loginTitle {
    font-weight: 600;
  }
  .overlay {
    position: absolute;
    background: #0000005e;
    inset: 0;
    z-index: 10;
  }
  .error-modal {
     max-width: 400px;
     margin: 7rem auto;
  }
  button {
    background: #0000005e;
  }
</style>