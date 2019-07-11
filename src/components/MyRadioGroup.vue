<template>
  <div>
    <MyLabel v-if=" text !== '' ">{{ text }}</MyLabel>
    <label v-for="item in myoptions" :key="item.id">
      <input type="radio" :name="id" :value="item.id">
      {{ item.name }}
    </label>
  </div>
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
    myoptions: {
      type: Array,
      required: true
    },
    selectedValue: {
      type: Object
    }
  },
  components: { MyLabel }
};
</script>
