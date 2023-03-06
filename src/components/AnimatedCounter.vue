<template>
    <div>
        <p class="mb-n1 pb-0 text-center" :class="numAddedClasses">
            {{ counter }}
        </p>
        <p class="pt-0 mt-0" :class="labelAddedClasses">{{ label }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            animate: Boolean,
            total: Number,
            numAddedClasses: String,
            labelAddedClasses: String
        },

        mounted() {
            this.animate ? this.animateCounter() : (this.counter = this.total)
        },

        data: function () {
            return {
                counter: 0
            }
        },

        methods: {
            animateCounter: function () {
                setTimeout(() => this.counter++, 30)
            }
        },

        watch: {
            counter: function (newVal) {
                newVal < this.total && this.animateCounter()
            }
        }
    }
</script>
