<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user: {
        firstName: 'Jack',
        lastName: 'Nicol'
      }
    }
  }
};
</script>

<style>
h1 {
  color: red
}
</style>