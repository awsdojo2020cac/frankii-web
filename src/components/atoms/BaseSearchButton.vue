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
            url: String
        }
    }
</script>

<style scoped>

</style>