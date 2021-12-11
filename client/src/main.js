import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
