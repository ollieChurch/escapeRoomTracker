<template>
    <div>
        <v-container>
                <v-row class="pt-15 pb-10" key="home0">
                    <v-col cols="7">
                        <text-decrypt
                            addedClasses="text-h1 hidden-sm-and-down"
                            :inputText="greeting"
                        />

                        <h2 class="text-h1 hidden-md-and-up">{{ greeting }}</h2>
                    </v-col>
                    <v-spacer />
                </v-row>

                <photo-gallery
                    :images="$store.state.images.images"
                    key="home1"
                />
        </v-container>
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
    
</style>
