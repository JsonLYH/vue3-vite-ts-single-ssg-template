<template>
  <div>1231312</div>
  <el-button @click="handleClick">按钮</el-button>
  <ul>
    <li v-for="datas in datas">{{datas.productTitle}}</li>
  </ul>
  <el-table :data="datas" style="width: 100%">
    <el-table-column prop="productTitle" label="商品名称" width="180" />
    <el-table-column prop="productPrice" label="商品价格" width="180" />
  </el-table>
  <el-button type="warning" @click="handlerCount">计数</el-button>
  {{ testStore.count }}
</template>

<script setup>
import { useTestStore } from '~/store'
import { useRouter } from "vue-router";
import {onMounted, ref} from "vue";
import {ElMessage} from "element-plus";
const testStore = useTestStore();
const router = useRouter();
const datas = ref([])
onMounted(()=>{
  fetch('https://api-v2.xdclass.net/api/rank/v1/hot_product').then(res=>res.json()).then(data=>{
    datas.value = data.data;
  })
})
function handlerCount() {
  ElMessage.info("点击了按钮")
  testStore.count++
}
function handleClick() {
  //页面跳转
  router.push({
    path: '/about',
  })
  console.log('点击了按钮')
}
</script>

<style scoped>

</style>
