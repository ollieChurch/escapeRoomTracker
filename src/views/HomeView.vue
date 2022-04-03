<template>
    <div>
        <v-container>
            <transition-group name="fade" appear>
                <v-row class="pt-15 pb-10" key="home0">
                    <v-col cols="7">
                        <text-decrypt
                            addedClasses="display-4"
                            :inputText="greeting"
                        />
                    </v-col>
                    <v-spacer />
                </v-row>

                <photo-gallery
                    :images="$store.state.images.images"
                    key="home1"
                />
            </transition-group>
        </v-container>

        <v-footer>
            <v-row key="home2">
                <v-spacer />
                <v-col cols="2">
                    <text-decrypt
                        addedClasses="secretMessage"
                        inputText="flip the photos"
                    />
                </v-col>
                <v-spacer />
            </v-row>
        </v-footer>
    </div>
</template>

<script>
    import PhotoGallery from '../components/PhotoGallery.vue'
    import TextDecrypt from '../components/TextDecrypt.vue'

    export default {
        name: 'HomeView',

        components: {
            PhotoGallery,
            TextDecrypt
        },

        data: function () {
            return {
                greeting: 'Hello...'
            }
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
</style>
