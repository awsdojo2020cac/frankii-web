<template>
    <div id="app">
        <v-app>
            <h1>Frankii</h1>
            <v-container fluid width="700">
                <v-row align="center">
                    <v-col cols=6>
                        <BaseCard title="質問文生成">
                            <v-select
                                    class="my-2"
                                    :items="categories"
                                    label="カテゴリ"
                                    filled dense
                            ></v-select>
                            <v-col cols=2>
                                <v-text-field v-model="category"></v-text-field>
                            </v-col>
                            <v-btn @click=submitToAPI>質問文生成</v-btn>
                        </BaseCard>
                    </v-col>
                    <v-col>
                        <BaseCard title="Search">
                            <v-row>
                                <BaseSearchButton :url=url text="Search on Google"></BaseSearchButton>
                            </v-row>
                            <v-row>
                                <BaseSearchButton :url=qiitaURL text="qiitaで検索"></BaseSearchButton>
                            </v-row>
                            <v-row>
                                <BaseSearchButton :url=awsURL
                                                  text="AWSの公式ドキュメンテーション"></BaseSearchButton>
                            </v-row>
                        </BaseCard>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script>
    // import inet from "./js/inet";
    // import axios from "axios";

    import BaseSearchButton from "./components/atoms/BaseSearchButton";
    import BaseCard from "./components/atoms/BaseCard";

    export default {
        name: 'App',
        components: {BaseCard, BaseSearchButton},
        data: () => ({
            category: "エラ",
            categories: ['エラー', 'ネットワークエラ-'],
            result: {},
            url: "https://www.google.com",
            qiitaURL: "https://qiita.com/search?q=api",
            awsURL: "https://docs.aws.amazon.com/search/doc-search.html?searchQuery=apigateway"
        }),
        methods: {
            submitToAPI() {
                console.log("api")
            },

        },
        mounted() {

        }
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
