<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

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

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 15px;
  }
</style>
