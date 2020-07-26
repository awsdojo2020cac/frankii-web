<template>
    <BaseCard title="質問文生成">
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
                    <div>{{finishedQuestionText}}</div>
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
            frankiiQuestions: {},
            finishedQuestionText: ""
        }),
        methods: {
            submitToAPI() {
                inet.formatQuestionText({}).then(res => this.finishedQuestionText = res.data.body);
            },
            getFrankiiQuestions() {
                inet.getFrankiiQuestions().then(res => this.frankiiQuestions = res.data.body);
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>