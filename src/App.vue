<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  * {
    margin: 0;
  }
</style>
