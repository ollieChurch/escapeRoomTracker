<template>
        <v-container>
            <v-row>
                <v-col cols="4">
                    <venue-card />
                </v-col>
                <v-col cols="4">
                    <venue-card />
                </v-col>
                <v-col cols="4">
                    <venue-card />
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
    import VenueCard from '../components/VenueCard.vue'

    export default {
        components: {
            VenueCard
        }
    }
</script>
