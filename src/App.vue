<template>
  <router-view />
</template>

<script>
import { useAuth } from './modules/auth/composables/useAuth';


export default {
  name: "App",
  setup() {

    const { checkAuthStatus } = useAuth()

    checkAuthStatus()

    return {}
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: none;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
