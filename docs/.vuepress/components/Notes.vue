<template>
  <div class="content">
    <p v-for="(item,index) in list" :key="index">
      <el-link  :underline="false" :href="item.href" target="_blank" :title="item.name">{{item.name}}<i class="el-icon-view el-icon--right"></i></el-link>
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
        },
        {
          name:'使用 uni-app 开发微信小程序的实践 + 踩坑合集',
          href:'https://www.yuque.com/jscode/notes/ol48er'
        },
        {
          name:'vue项目之(pc端)后台管理系统开发',
          href:'https://www.yuque.com/jscode/notes/ceboy2'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
