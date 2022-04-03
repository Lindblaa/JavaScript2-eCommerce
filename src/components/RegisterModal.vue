<template>
<!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
  Launch demo modal
</button> -->

<!-- Modal -->
<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="registerTitle">Register new user</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal2" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-outline">
          <input type="text" id="typeText" class="form-control border" />
          <label class="form-label" for="typeText">First name</label>
        </div>
        <div class="form-outline">
          <input type="text" id="typeText" class="form-control border" />
          <label class="form-label" for="typeText">Last name</label>
        </div>
        <div class="form-outline">
          <input type="email" id="typeEmail" class="form-control border" />
          <label class="form-label" for="typeEmail">Email</label>
        </div>
        <div class="form-outline mt-2">
          <input type="password" id="typeText" class="form-control border" />
          <label class="form-label" for="typeText">Password</label>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success">register</button>
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  methods: {
    closeModal2() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
  #registerTitle {
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