<template>
    <v-container>
        <h3 class="text-h2 py-8">My Top 10</h3>
        <v-row
            v-for="entry in getTopTen"
            :key="entry.game.name + entry.game.topTen"
        >
            <v-col cols="2" class="d-flex align-center justify-center">
                <p class="text-md-h1 text-h2">{{ entry.game.topTen }}</p>
            </v-col>
            <v-col cols="10">
                <game-description-card :entry="entry" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex'
    import GameDescriptionCard from '../components/GameDescriptionCard.vue'

    export default {
        components: {
            GameDescriptionCard
        },

        computed: {
            ...mapGetters(['getTopTen'])
        }
    }
</script>


