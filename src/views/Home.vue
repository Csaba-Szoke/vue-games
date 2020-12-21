<template>
  <div class="home mt-3">
    <AddGame @save-game="saveGame" />
    <GameList />
  </div>
</template>

<script>
import GameList from '@/components/GameList.vue'
import AddGame from '@/components/AddGame.vue'

export default {
  name: 'Home',
  components: {
    GameList,
    AddGame,
  },
  methods: {
    saveGame(game) {
      console.log(game)
    }
  }
}
</script>
