import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Addresses from "../views/Addresses.vue";
import AddressForm from '../views/AddressForm.vue';


// 引数にモジュールを設定して利用を宣言
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/addresses",
    name: "addresses",
    component: Addresses
  },
  {
    path: '/addresses/:address_id?/edit',
    name: 'address_edit',
    component: AddressForm
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // ↓関数でコンポーネントを返すように記述することで、aboutを開くときにコンポーネントをDLする
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
