<template>
  <div class="home">
    <GameList />
  </div>
</template>

<script>
import GameList from '@/components/GameList.vue'

export default {
  name: 'Home',
  components: {
    GameList,
  }
}
</script>
