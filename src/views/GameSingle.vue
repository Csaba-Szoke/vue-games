<template>
    <div class="game mt-3">
        <p class="m-0"><b>Title</b>: {{ game.title }}</p>
        <p><b>Released</b>: {{ game.releaseDate }}</p>
    </div>
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