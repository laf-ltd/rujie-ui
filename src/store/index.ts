import type { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();

export default function(app: App<Element>){
  app.use(store)
}

export { store }