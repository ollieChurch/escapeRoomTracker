<template>
    <v-container>
        <transition name="fade" appear>
            <v-row>
                <v-col cols="6">
                    <h1
                        class="display-4 py-15 pl-15 welcome"
                        @mouseover.once="$store.dispatch('startDecrypt')"
                    >
                        {{ getDecryptText }}
                    </h1>
                </v-col>
            </v-row>
        </transition>

        <photo-gallery :images="$store.state.images.images" />
    </v-container>
</template>

<script>
    import PhotoGallery from '../components/PhotoGallery.vue'
    import { mapGetters } from 'vuex'

    export default {
        name: 'HomeView',

        components: {
            PhotoGallery
        },

        mounted() {
            this.$store.dispatch('useTextDecrypt', this.greeting)
        },

        data: function () {
            return {
                greeting: 'Hello...',
                dotCount: 0
            }
        },

        computed: {
            ...mapGetters(['getDecryptText'])
        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 4s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .welcome {
        cursor: pointer;
    }
</style>
