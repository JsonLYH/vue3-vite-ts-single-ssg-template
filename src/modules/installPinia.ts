import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
export const install = (ctx:any) => {
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)
    ctx.app.use(pinia)
}
