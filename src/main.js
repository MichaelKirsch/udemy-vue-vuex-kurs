import Vue from "vue";
import App from "./App";
import vuetify from "./plugins/vuetify";
import store from "./store";
import VueRouter from "vue-router";
import AuthHandler from "./components/AuthHandler.vue";
import Home from "./views/Home.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/oauth2/callback", component: AuthHandler },
    { path: "/", component: Home },
  ],
});

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
