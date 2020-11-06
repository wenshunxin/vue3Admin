


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  setupUI  from "./setup/antd-design-vue"
import axios from "./utils/http"
import "@/assets/font/iconfont.css"
import '@/assets/common/atom.css'


const app = createApp(App);
  app.use(store);
  app.use(router);
  app.mount("#app");
setupUI(app);

// globalProperties  新增属性
app.config.globalProperties.$http = axios;