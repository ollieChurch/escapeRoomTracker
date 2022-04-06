<template>
    <div>
        <p :class="numAddedClasses">{{ counter }}</p>
        <p :class="labelAddedClasses">{{ label }}</p>
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
                setTimeout(() => this.counter++, 50)
            }
        },

        watch: {
            counter: function (newVal) {
                newVal < this.total && this.animateCounter()
            }
        }
    }
</script>
