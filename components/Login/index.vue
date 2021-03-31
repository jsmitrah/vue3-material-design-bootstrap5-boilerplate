<template>
<form>
  <!-- Email input -->
  <!-- <div class="row mt-5 p5-5"> -->
       <div class="row mt-4 justify-content-center container-fluid">
        <p class="h3">Login</p>
       </div>
  <div class="col-md-4 ">
 <!-- <p class="h4 text-center mb-4">Login</p> -->
    <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
    <input type="email" id="defaultFormLoginEmailEx" class="form-control"/>
    <br/>
    <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
    <input type="password" id="defaultFormLoginPasswordEx" class="form-control"/>
    <div class="text-center mt-4">
      <!-- <button class="btn btn-indigo" type="submit">Login</button> -->
      <button data-mdb-ripple-color="aqua" type="submit" class="btn primary btn-light">Login</button>
    </div>
  </div>
  <!-- </div> -->

</form>
</template>

<script>
module.exports = {
name:'Log'    
}
</script>