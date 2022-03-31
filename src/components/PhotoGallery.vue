<template>
    <div>
        <v-row
            v-for="(row, rowIndex) in imagesPerRow(3)"
            :key="'row' + rowIndex"
            class="hidden-sm-and-down"
        >
            <v-col
                v-for="(image, index) in imagesPerRow(3)[rowIndex]"
                :key="'img' + index"
                cols="4"
            >
                <v-img :src="image.src" :alt="image.alt" class="img" />
            </v-col>
        </v-row>

        <v-row
            v-for="(row, rowIndex) in imagesPerRow(2)"
            :key="'row' + rowIndex"
            class="hidden-md-and-up"
        >
            <v-col
                v-for="(image, index) in imagesPerRow(2)[rowIndex]"
                :key="'img' + index"
                cols="12"
                sm="6"
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
        },

        methods: {
            imagesPerRow: function (perRow) {
                const result = []

                for (let i = 1; i <= this.images.length / perRow; i++) {
                    const row = []
                    this.images.forEach((img, index) => {
                        if (
                            index >= i * perRow - perRow &&
                            index < i * perRow
                        ) {
                            row.push(img)
                        }
                    })
                    result.push(row)
                }
                return result
            }
        }
    }
</script>

<style scoped>
    .img {
        height: 200px;
    }
</style>
