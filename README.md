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
# 页面元信息的注入（SEO）
> 对于静态页面而言，<head> 中的头信息与页面元信息非常重要，它决定着搜索引擎收录的索引与关键词，也决定着页面链接在社交媒体分享时渲染的信息，一般来说 Vue 的页面组件只是编写 <body> 中的元素
```bash
<script setup>
import { useHead } from '@unhead/vue'

const title = 'UtilMeta | 全周期后端 API 应用 DevOps 解决方案';
const description = '面向后端 API 应用的全生命周期解决方案，助力每个创造者，我们的产品有 UtilMeta Python 框架，一个面向后端 API 开发的渐进式元框架，API 管理平台，以及 utype';

useHead({
  title: title,
  htmlAttrs: {
    lang: 'zh'
  },
  link: [
    {
      hreflang: 'en',
      rel: 'alternate',
      href: 'https://utilmeta.com'
    }
  ],
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:image',
      content: 'https://utilmeta.com/img/zh.index.png'
    },
    {
      property: 'og:description',
      content: description
    }
  ],
})

import Index from '@/views/Index.vue'
import AppWrapper from "@/components/AppWrapper.vue";

</script>

<template>
  <AppWrapper lang="zh">
    <Index lang="zh"></Index>
  </AppWrapper>
</template>
```
- title：页面的标题，直接影响着用户在浏览器中看到的页面标题与搜索引擎收录的网页中的标题
- htmlAttrs.lang：可以直接在 html 根元素中编辑语言属性 lang 的值
- link.hreflang：通过插入含有 hreflang 属性的 <link> 元素，你可以为页面指定不同的语言版本，这里我们就指定了首页的英文版本的链接，这样的属性能够更好地为搜索引擎的多语言呈现提供便利
- meta.description：元信息中的描述，直接影响着搜索引擎收录的网页中的描述
- meta.og:* 按照社交媒体渲染链接所通用的 Open Graph 协议 规定的属性，可以决定着你在把链接分享到如 Twitter(X), Discord 等社交媒体或聊天软件中时，它们的标题，描述和插图

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
