import { createApp } from 'vue';
import router from './router';
import store from "./store/index";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vuex from 'vuex';
import App from './App.vue';

createApp(App)
.use(router)
.use(ElementPlus)
.use(store)
.use(Vuex)
.mount('#app');
