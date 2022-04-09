<template>
    <v-container>
        <h2 class="text-h2">This is product {{ $route.params.id }}</h2>
    </v-container>
</template>

<script>
    export default {
        data: function() {
            return {
                productId: this.$route.params.id
            }
        }
    }
</script>
