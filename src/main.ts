/*
 * @Author: your name
 * @Date: 2021-07-12 20:19:46
 * @LastEditTime: 2021-07-12 19:42:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rujie-ui\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/less/global.less'
import antdv from './plugins/antdv'


const app = createApp(App)
app.use(router)
app.use(store)
app.use(antdv)
app.mount('#app')
