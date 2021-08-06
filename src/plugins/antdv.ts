/*
 * @Author: laf
 * @Date: 2021-07-26 16:58:28
 * @LastEditTime: 2021-08-06 14:30:21
 * @LastEditors: laf
 * @Description: 
 * @FilePath: \rujie-ui\src\plugins\antdv.ts
 * 低空飞行工作室(http://laf.ltd)
 */
import type { App } from 'vue';
import Antd from 'ant-design-vue'

export default function(app: App<Element>){
    app.use(Antd)
}