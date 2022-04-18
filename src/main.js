import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from "@/store";

import "normalize.css";
import '@/assets/less/common.less'
import library from '@/library'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(library)
app.mount('#app')
