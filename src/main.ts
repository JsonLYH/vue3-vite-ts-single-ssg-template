//==================npm run generate 生成多页面==================
//==================适用于不需要太多渲染逻辑的静态页面==================
//==================生成的多页面html，默认只包含开发时的静态内容，对动态请求的接口还是需要去服务端加载，但是对于单页面应用来说，也好很多了==================
// import type { UserModule } from './types'
// import { ViteSSG } from 'vite-ssg'
// import "element-plus/dist/index.css";
// import { routes } from 'vue-router/auto-routes'
// import App from './App.vue'
// import '~/styles/index.scss'
// import 'uno.css'
// import 'element-plus/theme-chalk/src/message.scss'
// import 'element-plus/theme-chalk/src/message-box.scss'
//
// console.log("是否是服务端环境：",import.meta.env.SSR)
//
// export const createApp = ViteSSG(
//   App,
//   {
//     routes,
//     base: import.meta.env.BASE_URL,
//   },
//   (ctx) => {
//       // install all modules under `modules/`
//       Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
//       .forEach(i =>{
//           i.install?.(ctx)
//       });
//   },
// )
//==================npm run build 单页面==================
import { createPinia } from 'pinia'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import '~/styles/index.scss'
import 'uno.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'

import { createRouter, createWebHistory } from 'vue-router'

import { createApp } from "vue";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);
app.use(pinia)
app.use(createRouter({
  history: createWebHistory(),
  routes,
}))
app.use(ElementPlus);
app.mount("#app");