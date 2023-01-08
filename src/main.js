import { createApp } from 'vue'
import App from './App.vue'
import '../app.css'
import { plugin, defaultConfig } from '@formkit/vue'
import store from "./store/index";
import YouTube from 'vue3-youtube'
import Notifications from '@kyvg/vue3-notification'

import router from "./route";

createApp(App).use(YouTube).use(Notifications).use(plugin, defaultConfig).use(store).use(router).mount('#app')
