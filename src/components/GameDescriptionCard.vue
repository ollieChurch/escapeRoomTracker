<template>
    <v-card class="rounded-xl purple-border" elevation="8">
        <v-container class="d-flex my-n4 py-n4">
            <div>
                <v-card-title>{{ entry.game.name }}</v-card-title>
                <v-card-subtitle>
                    {{ entry.venue.venue }} | {{ entry.venue.city }},
                    {{ entry.venue.country }}
                </v-card-subtitle>
            </div>
            <v-spacer />
            <template v-if="entry.game.tags">
                <create-tooltip
                    v-for="tag in entry.game.tags"
                    :key="`${tag}-topTen-${entry.game.name}`"
                    :text="tag"
                >
                    <v-icon x-large color="purple"> mdi-{{ findIcon(tag) }} </v-icon>
                </create-tooltip>
            </template>
        </v-container>
        <v-card-text class="text-body-1">
            {{ entry.game.description }}
        </v-card-text>
    </v-card>
</template>

<script>
    import CreateTooltip from './CreateTooltip.vue'

    export default {
        components: {
            CreateTooltip
        },

        props: {
            entry: Object
        }
    }
</script>
