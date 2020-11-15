<template>
  <div>
    <p v-border:dotted.round.shadow="{width: '5px', color: 'red'}">Home</p>
    <!-- （注）引数は一つしか取れない -->
    <h2>{{ title | upperCase | lowerCase }}</h2>
    <!-- 連結させた場合は、左から順に処理が実行される -->
    <p>{{ subTitle | lowerCase }}</p>
  </div>
</template>

<script>
// ローカル登録。thisは使うことができない
export default {
  data(){
    return {
      tmpData:"Hello",
      title: "Welcome to Tokyo",
      subTitle: "Tokyo!!",
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem"
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)"
      }
    }
  }
};
</script>
