<template>
  <p>
    <label v-if=" text !== '' ">{{ text }}</label>
    <input class="my__text" type="text" :id="this.id" :value="this.defaultvalue">
  </p>
</template>

<script>
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
  }
};
</script>

<style scoped>
.my__text {
  padding: 0.2rem, 0.3rem;
}
</style>
