<template>
    <v-card class="px-4 pt-2 scroll overflow-y-auto" outlined>
        <v-row no-gutters>
            <div class="card-title pt-3 pb-3 pl-2"> {{title}}</div>
        </v-row>
        <slot></slot>
    </v-card>
</template>

<script>
    export default {
        name: "BaseCard",
        props: {
            title: String
        }
    }
</script>

<style scoped>
    .card-title {
        font-weight: bold;
        font-size: 14px;
    }
</style>