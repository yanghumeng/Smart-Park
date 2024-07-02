import App from "./App";
import Vue from "vue";
import Vant from "./node_modules/vant/lib/vant";
Vue.use(Vant);
// #ifndef VUE3
import "./uni.promisify.adaptor";
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
