<template lang="">
    <div class="login-page">
        <div class="wallpaper-register"></div>
        <div class="flex justify-content-center align-items-center container-login-register">
            <LoginComponent />
        </div>
    </div>
</template>
<script>
import LoginComponent from '../components/LoginComponent.vue';


export default {
  name: 'LoginView',
  components: { LoginComponent }

};
</script>
<style scoped>
.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;

  .wallpaper-register {
    background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

}

.container-login-register {
  max-width: 30%;
  max-height: 40%;
  border-radius: 10px;
  background: #fff;
}
</style>
