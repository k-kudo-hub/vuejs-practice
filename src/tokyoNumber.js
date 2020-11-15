export const tokyoNumber = {
  data() {
    return {
      title: "Welcome to Tokyo",
      subTitle: "Tokyo!!",
      number: 0
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  created(){
    console.log("created in Mixin");
  }
};