<template>
  <p>
    <MyLabel v-if=" text !== '' ">{{ text }}</MyLabel>
    <input class="my__text" type="text" :id="this.id" :value="this.defaultvalue">
  </p>
</template>

<script>
import MyLabel from "./MyLabel.vue";
export default {
  props: {
    text: {
      type: String
    },
    id: {
      type: String,
      required: true
    },
    defaultvalue: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  components: { MyLabel }
};
</script>

<style scoped>
.my__text {
  padding: 0.2rem, 0.3rem;
}
</style>
