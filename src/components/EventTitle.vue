<template>
  <div>
    <label for="title">タイトル</label>
    <input
      id="title"
      type="text" 
      :value="value"
      @input="$emit('input')"
    >
    <p>{{ eventData.title }}</p>
  </div>
</template>

<script>
  export default {
    props: ["value"]
  };
</script>