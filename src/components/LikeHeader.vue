<template>
  <div>
    <slot>
      <h2>デフォルトのタイトル</h2>
    </slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
};
</script>

<style>
h1 {
  color: red
}
</style>