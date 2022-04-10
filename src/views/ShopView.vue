<template>
    <v-container class="pt-8">
        <h2 class="text-h2 pb-5">Maxwell Mysteries</h2>
        <p class="text-body-1">
            During the lockdowns of 2020 and 2021, my partner and I put our time to use creating the first two puzzle games in the Maxwell Mysteries series. We are delighted that the games have received rave reviews from players and the experts over at Review The Room. Follow 1930s Private Investigator Larry Maxwell into the New York underworld. Find the clues, solve the puzzles and close the case!
        </p>
        <product-display />
    </v-container>
</template>

<script>
    import ProductDisplay from '../components/ProductDisplay.vue'

    export default {
        components: {
            ProductDisplay
        }
    }
</script>

<style scoped>
    .shop-container {
        border: 1px solid gray;
    }

    .products-title {
        background-color: white;
        width: fit-content;
    }

    .product-card {
        height: 100%;
    }
</style>
