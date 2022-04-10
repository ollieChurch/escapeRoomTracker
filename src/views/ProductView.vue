<template>
    <v-container class="pt-8">
        <h2 class="text-h2">{{ product.name }}</h2>
        <v-subheader class="text-h5">
            {{ product.category }}
        </v-subheader>
        <v-row class="mt-4">
            <v-col
                cols="12"
                md="7"
                class="d-flex flex-column justify-space-between py-0"
            >
                <div>
                    <p
                        class="text-body-1 pr-2"
                        v-for="(para, index) in product.longDescription"
                        :key="product.name + 'desc' + index"
                    >
                        {{ para }}
                    </p>
                </div>
                <ul v-if="product.requirements" class="pb-4">
                    <p class="font-weight-bold pa-0 ma-0 ml-n6">Requirements</p>
                    <li
                        dense
                        v-for="requirement in product.requirements"
                        :key="`${productId} ${requirement}`"
                        class="text-body-1"
                    >
                        {{ requirement }}
                    </li>
                </ul>
                <v-row class="align-end">
                    <v-col cols="6">
                        <v-btn
                            xLarge
                            block
                            color="purple"
                            dark
                            @click="callToAction(product.link)"
                        >
                            {{ product.price === 0 ? 'Play' : 'Buy' }} Now
                        </v-btn>
                    </v-col>
                    <v-col cols="6">
                        <p class="text-h4 py-0 my-0">
                            {{ formatPrice(product.price) }}
                        </p>
                    </v-col>
                </v-row>
            </v-col>
            <v-col
                cols="12"
                md="5"
                class="align-self-start pt-5 pa-md-0 mx-auto"
            >
                <v-img
                    :src="product.image.src"
                    :alt="product.image.alt"
                    v-if="product.image"
                    class="purple-border rounded-xl"
                />
            </v-col>
        </v-row>
        <v-row class="mt-10">
            <product-display v-on:product-clicked="getProduct()" />
        </v-row>
    </v-container>
</template>

<script>
    import ProductDisplay from '../components/ProductDisplay.vue'

    export default {
        components: {
            ProductDisplay
        },

        mounted() {
            this.getProduct()
            window.scrollTo(0,0)
        },

        data: function () {
            return {
                productId: '',
                product: {}
            }
        },

        methods: {
            getProduct: function () {
                this.productId = this.$route.params.id
                this.product = this.$store.state.products.full.find(
                    product => product.id == this.productId
                )
                window.scrollTo(0, 0)
            },

            formatPrice: function (amount) {
                const result = amount / 100
                return amount === 0 ? 'FREE!' : `Just £${result}`
            },

            callToAction: function (link) {
                window.open(link)
            }
        }
    }
</script>
