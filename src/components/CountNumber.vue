<template>
  <div>
    <!-- （注）引数は一つしか取れない -->
    <h2>{{ title | upperCase | lowerCase }}</h2>
    <!-- 連結させた場合は、左から順に処理が実行される -->
    <p>{{ subTitle | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  created() {
    console.log("created in component")
  }
};
</script>