import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueRouter from 'vue-router'
Vue.use(BootstrapVue)


Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')