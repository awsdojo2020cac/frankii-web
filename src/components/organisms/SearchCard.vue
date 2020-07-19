<template>
    <BaseCard title="Search">
        <v-container>
            <v-row>
                <BaseSearchButton :url=googleUrl text="Search on Google"></BaseSearchButton>
            </v-row>
            <v-row>
                <BaseSearchButton :url=qiitaURL text="qiitaで検索"></BaseSearchButton>
            </v-row>
            <v-row>
                <BaseSearchButton :url=awsURL
                                  text="AWSの公式ドキュメンテーション"></BaseSearchButton>
            </v-row>
<!--            //todo 何キーワードでどこ(google, qiita)で検索したのかがわかる。-->
        </v-container>
    </BaseCard>
</template>

<script>
    import BaseCard from "../atoms/BaseCard";
    import BaseSearchButton from "../atoms/BaseSearchButton";

    export default {
        name: "SearchCard",
        components: {BaseCard, BaseSearchButton},
        data: () => ({
            googleUrl: "https://www.google.com",
            qiitaURL: "https://qiita.com/search?q=api",
            awsURL: "https://docs.aws.amazon.com/search/doc-search.html?searchQuery=apigateway",
        })
    }
</script>

<style scoped>

</style>