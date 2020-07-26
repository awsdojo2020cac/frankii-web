<template>
    <div id="app">
        <v-app>
            <h1>Frankii</h1>
            <v-container fluid width="700">
                <v-row align="center">
                    <v-col cols=8>
                        <FormatServiceCard></FormatServiceCard>
                    </v-col>
                    <v-col cols=4>
                        <SearchCard></SearchCard>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script>
    import SearchCard from "./components/organisms/SearchCard";
    import FormatServiceCard from "./components/organisms/FormatServiceCard";

    export default {
        name: 'App',
        components: {FormatServiceCard, SearchCard},
        data: () => ({}),

    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 30px;
    }
</style>
