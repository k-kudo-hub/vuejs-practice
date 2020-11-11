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
    <div>
      <h2>イベントのフォーム</h2>
      <label for="maxNumber">最大人数</label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p>{{ eventData.maxNumber }}</p>
      <label for="host">主催者</label>
      <input 
        id="host"
        type="text" 
        v-model.trim="eventData.host"
      >
      <p>{{ eventData.host }}</p>
      <label for="detail">イベントの内容</label>
      <textarea id="" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <pre>{{ eventData.detail }}</pre>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
    </div>
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
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false
      }
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

</style>