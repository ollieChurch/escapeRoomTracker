<template>
  <v-app>
    <nav-bar />

    <v-main>
      <router-view/>
    </v-main>
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

  mixins: function() {
      return [
          tagIcons
      ]
  },

  data: () => ({
    //
  }),
};
</script>

<style>
    * {
        box-sizing: border-box;
    }

    .v-card__text, .v-card__title {
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