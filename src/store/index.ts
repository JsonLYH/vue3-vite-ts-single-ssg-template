import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useTestStore = defineStore("testInfo", () => {
    let count = ref(0);
    return {
        count
    }
}, {
    //SSG下，不支持window及其子模块,默认开启打包会报错,需要单独进行判断
    persist: import.meta.env.SSR == false && {
        storage: window.localStorage
    }
})