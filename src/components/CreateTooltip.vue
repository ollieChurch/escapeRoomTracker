<template>
    <div class="d-flex align-center">
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on" class="px-1 container">
                    <slot></slot>
                </div>
            </template>
            <span>{{ text }}</span>
        </v-tooltip>
    </div>
</template>

<script>
    export default {
        props: {
            text: String
        }
    }
</script>

<style scoped>
    .container {
        height: fit-content;
    }
</style>
