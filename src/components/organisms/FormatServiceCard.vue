<template>
    <BaseCard title="質問文生成" id="format-service-card">
        <v-container>
            <v-row>
                <v-col cols=6>
                    <v-select
                            style="text-align:left"
                            class="my-2"
                            @change="getInputTemplate"
                            :items="categories"
                            item-text="displayText"
                            item-value="category"
                            label="カテゴリ"
                            filled dense
                    ></v-select>
                    <template v-for="(question, key) in inputTemplate">
                        {{question}}
                        <v-text-field v-if="!isKeyTextAreaField(key)" v-model=input[key] :key="key"></v-text-field>
                        <v-textarea outlined v-if="isKeyTextAreaField(key)" v-model=input[key] :key="key"></v-textarea>
                    </template>
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
            categories: [],
            input: {
                "task": "[#123 サーバーメンテ]",
                "genre": "バックエンド",
                "errorContent": "Hello WorldはHi Worldと認識されない",
                "errorMsg": "if \"Hello World\" == \"Hi World\":\n" +
                    "    print(\"Hello World\")"
            },
            inputTemplate: {},
            formattedText: ""
        }),
        methods: {
            initialize() {
                inet.getFrankiiQuestionCategories().then(res => this.categories = res.data);
            },
            submitToAPI() {
                inet.formatQuestionText(this.input).then(res => this.formattedText = res.data.body);
            },
            getInputTemplate(category) {
                inet.getInputTemplate(category).then(res => this.inputTemplate = res.data.blocks);
            },
            isKeyTextAreaField(key) {
                return key === "errorMsg";
            }
        },
        mounted() {
            this.initialize();
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