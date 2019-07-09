<template>
  <div id="app">
    <form v-on:submit.prevent>
      <MyOption
        text="あなたの性別は？"
        id="gender"
        :myoptions="[{id:1,name:'男'},{id:2,name:'女'}]"
        :selectedValue="{id:1}"
      ></MyOption>
      <MyOption
        text="あなたの住んでいる都道府県は？"
        id="prefecture"
        :myoptions="[{id:1,name:'東京都'},{id:2,name:'それ以外'}]"
        :selectedValue="{id:1}"
      ></MyOption>
      <MyOption
        text="あなたの名前は？"
        id="name"
        :myoptions="[{id:1,name:'花子'},{id:2,name:'忠司'},{id:3,name:'それ以外'}]"
        :selectedValue="{id:2}"
      ></MyOption>
      <button @click="gatherResult">send</button>
    </form>
    <!-- <div v-if=" Object.keys(result).length !== 0 ">{{ result }}</div> -->
    <div v-if=" this.result.length !== 0 ">{{ result }}</div>
  </div>
</template>

<script>
import MyOption from "./components/MyOption.vue";

export default {
  name: "App",
  data: () => {
    return {
      // result: {}
      result: []
    };
  },
  methods: {
    gatherResult: () => {
      this.result.push(document.getElementById("prefecture").innerText);
    }
  },
  components: {
    MyOption
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
