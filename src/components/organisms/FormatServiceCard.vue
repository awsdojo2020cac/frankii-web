<template>
    <BaseCard title="質問文生成" id="format-service-card">
        <v-container>
            <v-row>
                <v-col cols=6>
                    <v-select
                            class="my-2"
                            :items="categories"
                            label="カテゴリ"
                            filled dense
                    ></v-select>
                    <template v-for="(question, key) in frankiiQuestions">
                        {{question}}
                        <v-text-field :key="key"></v-text-field>
                    </template>
                    <v-btn @click=getFrankiiQuestions>質問文取得</v-btn>
                    <v-btn @click=submitToAPI>質問文生成</v-btn>&nbsp;
                    <v-btn>Clear All</v-btn>
                </v-col>

                <v-col cols="6">
                    <div class="pre-formatted">{{finishedQuestionText}}</div>
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
            categories: ['エラー', 'ネットワークエラ-'],
            input: {
                "task": "「サーバーメンテ(tkt. 1234)」",
                "genre": "バックエンド",
                "errorContent": "（事象）",
                "errorMsg": "（エラーメッセージ）"
            }
            ,
            frankiiQuestions: {},
            finishedQuestionText: ""
        }),
        methods: {
            submitToAPI() {
                inet.formatQuestionText(this.input).then(res => this.finishedQuestionText = res.data.body);
            },
            getFrankiiQuestions() {
                inet.getFrankiiQuestions({"category":"error"}).then(res => this.frankiiQuestions = res.data.body);
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .pre-formatted {
        white-space: pre;
    }

    #format-service-card{
        text-align: left;
    }
</style>