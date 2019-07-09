<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <MyOption id="name" :myoptions="[{id:1,name:'aaa'},{id:2,name:'bbb'}]" :selectedValue="{id:2}"></MyOption>
  </div>
</template>

<script>
import MyOption from "./components/MyOption.vue";

export default {
  name: "App",
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
