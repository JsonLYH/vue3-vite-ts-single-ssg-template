import { useDark, useToggle } from '@vueuse/core'
//页面使用 import { toggleDark } from '~/composables'
// toggleDark()
export const isDark = useDark()
export const toggleDark = useToggle(isDark)
