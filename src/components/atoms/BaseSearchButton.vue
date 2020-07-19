<template>
    <v-btn :href=url target="_blank">
        {{text}}
    </v-btn>
</template>

<script>
    export default {
        name: "BaseSearchButton",
        props: {
            text: String,
            googleUrl: String
        }
    }
</script>

<style scoped>

</style>