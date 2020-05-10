import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyDBCQquvy42KjbxyuF_BALzfmC_6RbJHys",
    authDomain: "my-address-pj-d370a.firebaseapp.com",
    databaseURL: "https://my-address-pj-d370a.firebaseio.com",
    projectId: "my-address-pj-d370a",
    storageBucket: "my-address-pj-d370a.appspot.com",
    messagingSenderId: "419925942827",
    appId: "1:419925942827:web:836bbe4a2fb2fdbd1ec06e",
    measurementId: "G-2XY9CLYC0K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
// Vueインスタンス生成時にrouterを渡している
// 正式な書き方はrouter: router
