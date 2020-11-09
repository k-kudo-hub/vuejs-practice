<template>
  <div>
    <LikeHeader>
      <h2>初めまして</h2>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentCompornent = 'Home'">Home</button>
    <button @click="currentCompornent = 'About'">About</button>
    <keep-alive>
      <component :is="currentCompornent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 14,
      currentCompornent: "Home",
    };
  },
  components: {
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value) {
      this.number = value
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}

</style>