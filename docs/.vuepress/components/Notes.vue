<template>
  <div class="content">
    <p v-for="(item,index) in list" :key="index">
      <el-link :href="item.href" target="_blank" :title="item.name">{{item.name}}<i class="el-icon-view el-icon--right"></i></el-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      list:[
        {
          name:'es6基础总结01之let,var,count的理解',
          href:'https://www.yuque.com/jscode/notes/xvpwbh'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
