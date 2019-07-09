<template>
  <p>
    <label v-if=" text !== '' ">{{ text }}</label>
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
export default {
  // data: () => {
  //   return {
  //     items: [{ id: 1, message: "Foo" }, { id: 2, message: "Bar" }]
  //   };
  // }

  // },
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
  }
};
</script>
