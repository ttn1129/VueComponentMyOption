<template>
  <label :for="id">
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    }
  }
};
</script>

