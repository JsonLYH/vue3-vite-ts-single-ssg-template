# 判断客户端与服务端环境
## 使用import.meta.env.SSR
> 客户端为false，服务端为true
## 使用ClientOnly组件
```bash
<client-only>
  <your-client-side-components />
  <template #placeholder>
    <your-placeholder-components />
  </template>
</client-only>
```
# 环境说明

> 整合新版vite、vue3、elementui-plus、自定义主题、自动生成路由(约定大于配置)、Pinia、Axios、Sass、UnoCSS、代理、多环境配置、SSG、TS

- Preview: <https://vite-starter.element-plus.org>

This is an example of on-demand element-plus with [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

> If you want to import all, it may be so simple that no examples are needed. Just follow [quickstart | Docs](https://element-plus.org/zh-CN/guide/quickstart.html) and import them.

If you just want an on-demand import example `manually`, you can check [unplugin-element-plus/examples/vite](https://github.com/element-plus/unplugin-element-plus/tree/main/examples/vite).

If you want to a nuxt starter, see [element-plus-nuxt-starter](https://github.com/element-plus/element-plus-nuxt-starter/).

## Node环境
需要Node22+版本
## Project setup

```bash
pnpm install

# npm install
# yarn install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies for production

```bash
# 单页面应用
npm run build
# SSG 多页面应用
npm run generate
```

## Usage

```bash
git clone https://github.com/element-plus/element-plus-vite-starter
cd element-plus-vite-starter
npm i
npm run dev
```

### Custom theme

See `src/styles/element/index.scss`.
