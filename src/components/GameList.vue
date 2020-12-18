<template>
    <div class="games">
        <h1>Games:</h1>
        <router-link class="game"
            v-for="game in games"
            :key="game.id"
            :to="{
                name: 'GameSingle',
                params: { id: game.id, title: game.slug }
            }"
        >
            {{ game.title }}
        </router-link>
    </div>
</template>

<script>
    import GamesJs from '@/assets/games.js'

    export default {
        name: "Games",
        data: function() {
            return {
                games: GamesJs
            }
        }
    };
</script>

<style scoped>
    .games .game {
        background-color: rgb(71, 68, 68);
        padding: 10px;
        margin-bottom: 10px;
        min-width: 200px;
        opacity: 0.8;
        color: #efefef;
        display: block;
        text-decoration: none;
    }
    .games .game:hover {
        margin-left: 10px;
        cursor: pointer;
        opacity: 1;
    }
</style>
