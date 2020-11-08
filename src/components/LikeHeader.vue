<template>
  <div>
    <slot name="title" :user="user" text="text"></slot>
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot>
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