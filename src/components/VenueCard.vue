<template>
    <v-card elevation="7" class="rounded-xl">
        <v-card-title class="text-h5 font-weight-bold">{{ venue.venue }}</v-card-title>
        <v-card-subtitle class='text-subtitle-1'>{{
            `${venue.city}, ${venue.country}`
        }}</v-card-subtitle>
        <v-list>
            <v-list-item
                v-for="game in venue.gamesPlayed"
                :key="venue.venue + game.name"
            >
                <v-card-text :class="gameColor(game.fail)" class="game-name">{{
                    game.name
                }}</v-card-text>
                <v-spacer />
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            class="icon"
                            :class="gameColor(game.fail)"
                            v-bind="attrs"
                            v-on="on"
                        >
                            mdi-emoticon-{{
                                game.fail ? 'dead' : 'cool'
                            }}-outline
                        </v-icon>
                    </template>
                    <span>{{
                        game.fail ? 'failed escape' : 'succesful escape'
                    }}</span>
                </v-tooltip>

                <v-tooltip top v-for="tag in game.tags" :key="venue.venue + game.name + tag">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            class="icon"
                            :class="gameColor(game.fail)"
                            v-bind="attrs"
                            v-on="on"
                        >
                            mdi-{{ findIcon(tag) }}
                        </v-icon>
                    </template>
                    <span>{{
                        tag
                    }}</span>
                </v-tooltip>

                <v-tooltip top v-if="game.topTen">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            class="icon"
                            :class="gameColor(game.fail)"
                            v-bind="attrs"
                            v-on="on"
                        >
                            mdi-trophy-outline
                        </v-icon>
                    </template>
                    <span>top 10</span>
                </v-tooltip>

            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        props: {
            venue: Object
        },

        methods: {
            gameColor: function (fail) {
                return fail ? 'fail' : 'win'
            }
        }
    }
</script>

<style scoped>
    .win {
        color: green;
    }

    .fail {
        color: red;
    }

    .icon {
        padding: 0 .05em;
        font-size: 1.6rem;
    }

    .game-name {
        font-size: 1.15rem;
    }

    .v-card {
        height: 100%;
        border: purple 8px solid;
    }

    .v-list-item {
        padding-left: 0;
        margin-left: 0;
    }
</style>
