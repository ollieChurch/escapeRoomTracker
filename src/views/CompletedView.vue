<template>
    <v-container>
        <v-container>
            <v-row class="row-container mt-6">
                <v-col cols="8" class="row-container">
                    <h2 class="text-h2">Completed Games</h2>
                </v-col>
                <v-spacer />
                <v-col cols="auto" class="row-container">
                    <animated-counter
                        :total="getTotalNumber"
                        animate
                        label="games played"
                        numAddedClasses="text-h2 mb-n1 pb-0 text-center"
                        labelAddedClasses="pt-0 mt-0"
                    />
                </v-col>
            </v-row>
        </v-container>

        <v-row>
            <v-col cols="12" lg="6">
                <v-text-field
                    hide-details
                    outlined
                    clearable
                    prepend-inner-icon="mdi-magnify"
                    label="Search"
                    class="search-bar"
                    v-model="searchFilter"
                />
            </v-col>

            <v-col cols="auto" lg="6" class="d-flex align-center justify-end">
                <p class="pb-0 mb-0 mr-5">Filter By:</p>
                <v-btn-toggle icon rounded v-model="tagFilter" >
                    <v-tooltip top v-for="tag in getTags" :key="tag + 'btn'">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn :value="tag" v-bind="attrs" v-on="on" >
                                <v-icon>mdi-{{ findIcon(tag) }}</v-icon>
                            </v-btn>
                        </template>
                        <span>{{ tag }}</span>
                    </v-tooltip>

                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn value="topTen" v-bind="attrs" v-on="on" >
                                <v-icon>mdi-trophy</v-icon>
                            </v-btn>
                        </template>
                        <span>top 10</span>
                    </v-tooltip>
                </v-btn-toggle>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="venue in getFilteredList"
                :key="venue.venue + venue.city"
            >
                <venue-card :venue="venue" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import VenueCard from '../components/VenueCard.vue'
    import AnimatedCounter from '../components/AnimatedCounter.vue'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            VenueCard,
            AnimatedCounter
        },

        mounted() {
            this.$store.dispatch('filterList', {searchBar: this.searchFilter, tag: this.tagFilter })
        },

        data: function () {
            return {
                tagFilter: '',
                searchFilter: ''
            }
        },

        computed: {
            ...mapGetters(['getFilteredList', 'getTotalNumber', 'getTags']),
        },

        methods: {
            filterList: function() {
                this.$store.dispatch('filterList', { searchBar: this.searchFilter, tag: this.tagFilter })
            }
        },

        watch: {
            tagFilter: function () {
                this.filterList()
            },

            searchFilter: function () {
                this.filterList()
            }
        }
    }
</script>

<style scoped>
    .search-bar {
        font-size: 1.25rem;
    }
</style>
