<template>
    <div>
        <v-row>
            <v-col
                v-for="(image, index) in images"
                :key="'img' + index"
                cols="12"
                sm="6"
                md="4"
            >
                <v-img :src="image.src" :alt="image.alt" class="img" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        props: {
            images: Array
        }
    }
</script>

<style scoped>
    .img {
        height: 200px;
    }
</style>
