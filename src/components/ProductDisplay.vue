<template>
    <v-container class="shop-container my-15 px-10 pb-10 rounded-xl">
        <h3 class="text-h3 pb-4 pt-0 px-3 mt-n10 products-title">Products</h3>
        <v-row>
            <v-col
                cols="12"
                sm="6"
                lg="4"
                v-for="item in $store.state.products.full"
                :key="item.name + item.id"
            >
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card
                            elevation="7"
                            class="rounded-xl py-2 purple-border product-card"
                        >
                            <v-card-title class="px-5">
                                {{ item.name }}
                            </v-card-title>
                            <v-card-subtitle class="px-5">
                                {{ item.category }}
                            </v-card-subtitle>
                            <v-img
                                :src="item.image.src"
                                :alt="item.image.alt"
                            />

                            <div>
                                <v-fade-transition>
                                    <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="#036358"
                                        class="rounded-xl test"
                                    >
                                        <v-btn
                                            color="purple"
                                            link
                                            :to="`/maxwellmysteries/product/${item.id}`"
                                            @click="$emit('product-clicked')"
                                        >
                                            See more info
                                        </v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </div>

                            <v-card-text class="px-5 text-body-1">
                                {{ item.shortDescription }}
                            </v-card-text>
                            <v-card-actions
                                class="flex-column pt-0"
                                v-if="item.review"
                            >
                                <v-rating
                                    full-icon="mdi-star"
                                    length="5"
                                    readonly
                                    :value="item.review.rating"
                                    size="25"
                                    color="orange"
                                />
                                <p class="text-subtitle">
                                    {{ item.review.reviewer }}
                                </p>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {}
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

    .test {
        width: 101.5%;
        height: 101%;
        top: -2.75px;
        left: -2.5px;
    }
</style>
