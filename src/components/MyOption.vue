<template>
  <p>
    <MyLabel v-if=" text !== '' ">{{ text }}</MyLabel>
    <select :id="id">
      <option
        v-for="item in myoptions"
        :key="item.id"
        :value="item.id"
        :selected="item.id === selectedValue.id"
      >{{ item.name }}</option>
    </select>
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
