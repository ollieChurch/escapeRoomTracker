<template>
    <v-container class="pt-8">
        <h2 class="text-h2 pb-5">Maxwell Mysteries</h2>
        <p class="text-body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            diam, efficitur ac tellus id, cursus scelerisque massa. Mauris
            pretium neque eu sodales dictum. Cras congue interdum eros, non
            hendrerit leo luctus et. Duis viverra aliquet rhoncus. Curabitur id
            lorem vel enim porta sodales. Donec id varius magna, quis dictum
            ante.
        </p>
        <v-container class="shop-container my-15 px-10 pb-10 rounded-xl">
            <h3 class="text-h3 pb-4 pt-0 px-3 mt-n10 products-title">
                Products
            </h3>
            <v-row>
                <v-col cols="4" v-for="product in $store.state.products.full" :key="product.name + product.id">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                                elevation="7"
                                class="rounded-xl purple-border"
                            >
                                <v-card-title class="px-5 pt-5">
                                    {{ product.name }}
                                    </v-card-title>
                                <v-card-subtitle class="px-5">
                                    {{ product.category }}
                                    </v-card-subtitle>
                                <v-img
                                    :src="product.image"
                                    alt=""
                                />

                                <div>
                                    <v-fade-transition>
                                        <v-overlay
                                            v-if="hover"
                                            absolute
                                            color="#036358"
                                        >
                                            <v-btn color="purple">
                                                See more info
                                                </v-btn>
                                        </v-overlay>
                                    </v-fade-transition>
                                </div>

                                <v-card-text class="px-5 pb-0 text-body-1">
                                   {{ product.text }}
                                </v-card-text>
                                <v-card-actions class="px-5 flex-column" v-if="product.review">
                                    <v-rating
                                        full-icon="mdi-star"
                                        length="5"
                                        readonly
                                        :value="product.review.rating"
                                        size="38"
                                        color="orange"
                                    />
                                    <p class="text-subtitle">{{ product.review.reviewer }}</p>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
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
</style>
