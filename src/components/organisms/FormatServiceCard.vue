<template>
    <BaseCard title="質問文生成" id="format-service-card">
        <v-container>
            <v-row>
                <v-col cols=6>
                    <v-select
                            style="text-align:left"
                            class="my-2"
                            @change="getFrankiiQuestions"
                            :items="categories"
                            label="カテゴリ"
                            filled dense
                    ></v-select>
                    <template v-for="(question, key) in frankiiQuestions">
                        {{question}}
                        <v-text-field v-if="!isKeyTextAreaField(key)" v-model=input[key] :key="key"></v-text-field>
                        <v-textarea outlined v-if="isKeyTextAreaField(key)" v-model=input[key] :key="key"></v-textarea>
                    </template>
                    <v-btn @click=getFrankiiQuestions>質問文取得</v-btn>
                    <v-btn @click=submitToAPI>質問文生成</v-btn>&nbsp;
                    <v-btn>Clear All</v-btn>
                </v-col>

                <v-col cols="6">
                    <div class="pre-formatted">{{formattedText}}</div>
                    <br>
                    <v-btn v-if="formattedTextExists" v-clipboard="formattedText">COPY</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </BaseCard>
</template>

<script>
    import BaseCard from "../atoms/BaseCard";
    import inet from "../../js/inet";

    export default {
        name: "FormatServiceCard",
        components: {BaseCard},
        data: () => ({
            category: "エラ",
            categories: ['アプリ開発でエラーが出た', 'クラウド上でNWエラーが出た',
                'ファイルの場所がわからない', ' アプリ実装方法がわからない'],
            input: {
                "task": "[#123 サーバーメンテ]",
                "genre": "バックエンド",
                "errorContent": "Hello WorldはHi Worldと認識されない",
                "errorMsg": "if \"Hello World\" == \"Hi World\":\n" +
                    "    print(\"Hello World\")"
            }
            ,
            frankiiQuestions: {},
            formattedText: ""
        }),
        methods: {
            submitToAPI() {
                inet.formatQuestionText(this.input).then(res => this.formattedText = res.data.body);
            },
            getFrankiiQuestions() {
                inet.getFrankiiQuestions({"category": "error"}).then(res => this.frankiiQuestions = res.data.body);
            },
            isKeyTextAreaField(key) {
                return key === "errorMsg";
            }
        },
        mounted() {

        },
        computed: {
            formattedTextExists() {
                return this.formattedText !== undefined && this.formattedText !== "";
            }
        }
    }
</script>

<style scoped>
    .pre-formatted {
        white-space: pre;
    }

    #format-service-card {
        text-align: left;
    }
</style>