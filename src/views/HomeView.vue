<template>
    <v-container>
        <transition name="fade" appear>
            <h1 class="display-4 py-15 pl-15">
                {{ greeting }}
                <transition name="fade">
                    <span class="ml-n6" v-if="count >= 1" key="1">.</span>
                </transition>
                <transition name="fade">
                    <span v-if="count >= 2">.</span>
                </transition>
                <transition name="fade">
                    <span v-if="count >= 3">.</span>
                </transition>
            </h1>
        </transition>

        <photo-gallery :images="images"/>
    </v-container>
</template>

<script>
    import PhotoGallery from '../components/PhotoGallery.vue'
    import BankHeistImg from '../assets/images/Bank_Heist.jpg'
    import BlownAwayImg from '../assets/images/Blown_Away.jpg'
    import DodgeImg from '../assets/images/Dodge.jpg'
    import JailBudapestImg from '../assets/images/Jail_Break_Budapest.jpg'
    import JailOrlandoImg from '../assets/images/Jail_Break_Orlando.jpg'
    import PiratesImg from '../assets/images/Pirates_Of_Polaris.jpg'


    export default {
        name: 'HomeView',

        components: {
            PhotoGallery
        },

        mounted() {
            setTimeout(() => (this.count += 1), 1500)
            setTimeout(() => (this.count += 1), 2500)
            setTimeout(() => (this.count += 1), 3500)
        },

        data: function () {
            return {
                greeting: 'Hello',
                count: 0,
                images: [
                    {
                        src: BankHeistImg,
                        alt: ''
                    },
                    {
                        src:BlownAwayImg,
                        alt: ''
                    },
                    {
                        src: DodgeImg,
                        alt: ''
                    },
                    {
                        src: JailBudapestImg,
                        alt: ''
                    },
                    {
                        src: JailOrlandoImg,
                        alt: ''
                    },
                    {
                        src: PiratesImg,
                        alt: ''
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 4s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
