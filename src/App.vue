<template>
  <div id="app">
    <form v-on:submit.prevent>
      <MyTextbox text="あなたの名前は？" id="person__name" defaultvalue placeholder="花子"></MyTextbox>
      <MyRadioGroup
        text="あなたの性別は？"
        id="gender"
        :myoptions="[{id:1,name:'男'},{id:2,name:'女'}]"
        :selectedValue="{id:1}"
      ></MyRadioGroup>
      <MyOption
        text="あなたの住んでいる都道府県は？"
        id="prefecture"
        :myoptions="[{id:1,name:'東京都'},{id:2,name:'それ以外'}]"
        :selectedValue="{id:1}"
      ></MyOption>
      <button @click="gatherResult">send</button>
    </form>
    <!-- <div v-if=" Object.keys(result).length !== 0 ">{{ result }}</div> -->
    <div v-if=" this.result.length !== 0 ">{{ result }}</div>
  </div>
</template>

<script>
import MyOption from "./components/MyOption.vue";
import MyTextbox from "./components/MyTextbox.vue";
import MyRadioGroup from "./components/MyRadioGroup.vue";

export default {
  name: "App",
  data: () => {
    return {
      result: []
    };
  },
  methods: {
    gatherResult() {
      this.result = [];
      this.result.push({
        gender: document.getElementById("gender").value
      });
      this.result.push({
        prefecture: document.getElementById("prefecture").value
      });
      this.result.push({
        person__name: document.getElementById("person__name").value
      });
    }
  },
  components: {
    MyOption,
    MyTextbox,
    MyRadioGroup
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
