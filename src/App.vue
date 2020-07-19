<template>

  <div id="app">
  <v-app>
      <h1>Frankii</h1>
    <v-container fluid width="700">
    質問文生成

    <v-row align="center">
    <v-col cols=2>
    <v-select
     class="my-2"
          :items = "categories"
             label="カテゴリ"
                                          filled dense
                                        ></v-select>
                                           <v-col cols=2>
                                            <v-text-field v-model="category"></v-text-field>
                                            </v-col>
                                        </v-col>
                                        </v-row>
                                        </v-container>
                                        <v-btn @click=submitToAPI>質問文生成</v-btn>
                                        <v-card>Hi</v-card>
</v-app>

  </div>
</template>

<script>

export default {
  name: 'App',
  data:() => ({
        category: "エラ",
        categories:['エラー','ネットワークエラ-']
     }),
   methods:{
        submitToAPI(){
            console.log("api")
        }
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
