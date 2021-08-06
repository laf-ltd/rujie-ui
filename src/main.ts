/*
 * @Author: your name
 * @Date: 2021-07-12 20:19:46
 * @LastEditTime: 2021-08-06 14:33:42
 * @LastEditors: laf
 * @Description: In User Settings Edit
 * @FilePath: \rujie-ui\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/less/global.less'
import antdv from './plugins/antdv'


const app = createApp(App).use(router).use(store).use(antdv)
app.mount('#app')
