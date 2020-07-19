<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input v-model="category">
    <v-overflow-btn
                                          class="my-2"
                                          :items="categories"
                                          label="Segmented Btn"
                                          segmented
                                        ></v-overflow-btn>
    <p>Message is: </p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data:function(){
    return{
        category: "エラー",
        categories:[{text:"エラー"},{text:"task"}]
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
  margin-top: 60px;
}
</style>
