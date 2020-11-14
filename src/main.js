import Vue from 'vue'
import App from './App.vue'
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false
Vue.component('LikeNumber',LikeNumber);
Vue.directive("border",{
  bind(el, binding, vnode) {
    // ディレクティブが初めて対象の要素に紐づいたとき
  },
  inserted(el, binding, vnode) {
    // 親Nodeに挿入されたとき
  },
  update(el, binding, vnode, oldvnode) {
    // コンポーネントが更新される度。子コンポーネントが更新される前
  },
  componentUpdated(el, binding, vnode, oldvnode) {
    // コンポーネントが更新される度。子コンポーネントが更新された後
  },
  unbind(el, binding, vnode) {
    // ディレクティブが紐づいている要素から取り除かれたとき
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');


