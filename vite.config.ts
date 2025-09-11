import path from 'node:path'
import Vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig,loadEnv } from 'vite'
// https://vitejs.dev/config/
export default (({ mode })=>{
  //因为在vite.config.ts中不能直接使用import.meta.env.xxxx
  const env = loadEnv(mode,__dirname)
  return defineConfig({
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/styles/element/index.scss" as *;`,
          api: 'modern-compiler'
        },
      },
    },

    plugins: [
      Vue(),
      // https://github.com/posva/unplugin-vue-router
      VueRouter({
        extensions: ['.vue', '.md'],
        dts: 'src/typed-router.d.ts',
      }),

      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
        dts: 'src/components.d.ts',
      }),

      // https://github.com/antfu/unocss
      // see uno.config.ts for config
      Unocss(),
    ],

    ssr: {
      // TODO: workaround until they support native ESM
      noExternal: ['element-plus']
    },
    server: {
      host: "0.0.0.0",
      port:5188,
      proxy: {
        //api是自行设置的请求前缀，任何请求路径以/api开头的请求将被代理到对应的target目标
        "/proxy": {
          target: env.VITE_BASE_API, //目标域名
          changeOrigin: true, //需要代理跨域
          rewrite: (path) => path.replace(/^\/proxy/, ""), //路径重写，把'/api'替换为''
        },
      },
    },
  })
})
