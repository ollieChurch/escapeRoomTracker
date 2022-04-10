<template>
    <v-app>
        <nav-bar />

        <v-main>
            <v-fade-transition>
                <router-view />
            </v-fade-transition>
        </v-main>

        <v-footer dark class="flex-column mt-6">
            <p class="text-body-2 pt-4 pb-0 mb-0">Made by Ollie</p>
            <p class="text-body-2 pt-0 mt-0">Copyright {{ new Date().getFullYear() }}</p>
        </v-footer>
    </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import tagIcons from './mixins/tagIcons'

export default {
  name: 'App',


        components: {
            NavBar
        },

        mixins: function () {
            return [tagIcons]
        },

        data: () => ({
            //
        })
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    .v-card__text,
    .v-card__title {
        word-break: normal !important;
    }

    .v-navigation-drawer--close {
        display: none;
    }

    .purple-border {
        border: 8px solid purple !important;
    }

    .debug {
        outline: 2px solid red;
    }
</style>
