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
                    <template v-for="block in inputTemplate">
                        {{block.label}}
                        <v-text-field v-if="!isMultiLine(block.multiline)" v-model=input[block.key]
                                      :key="block.key"></v-text-field>
                        <v-textarea outlined v-if="isMultiLine(block.multiline)" v-model=input[block.key]
                                    :key="block.key"></v-textarea>
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
            theCategory: "",
            categories: [],
            input: {},
            inputTemplate: {},
            formattedText: ""
        }),
        methods: {
            initialize() {
                inet.getFrankiiQuestionCategories().then(res => this.categories = res.data);
            },
            submitToAPI() {
                const req = {
                    category: this.theCategory,
                    input: this.input
                };
                inet.formatQuestionText(req).then(res => {
                    this.formattedText = res.data
                });
            },
            getInputTemplate(category) {
                this.theCategory = category;
                inet.getInputTemplate(category).then(res => this.inputTemplate = res.data.blocks);
            },
            isMultiLine(multiline) {
                return multiline;
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