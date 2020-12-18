<template>
  <div id="nav">
    <div class="container">
      <router-link :to="{ name: 'Home' }" >Home</router-link>
    </div>
  </div>
</template>

<style scoped>
#nav {
  background-color: #777;
}
#nav a {
  text-decoration: none;
  color: #efefef;
  font-size: 20px;
  margin-right: 20px;
}
#nav a:hover {
  color: #c4c0c0;
}
</style>
