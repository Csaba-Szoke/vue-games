<template>
    {{ game.title }}
</template>

<script>
import GamesJs from '@/assets/games.js'

export default {
    name: 'GameSingle',
    data: function() {
        return {
            game: GamesJs.find(({ id }) => id == this.$route.params.id)
        }
    }
}
</script>