<template>
  <div class="content">
    <el-card class="box-card">

      <p>邮箱:
        <el-link :underline="false" target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=869710179@qq.com">点击写信</el-link>
      </p>
      <h1>关于我</h1>
      <el-divider />
      <div>
        <p>我是一个简单的"next"</p>
        <p>目前在宁波的一家互联网公司供职,主要负责web前端,h5,小程序及app端的开发与制作</p>
      </div>
    </el-card>
    <div class="pogress">
      <div v-for="(item,index) in list" :key="index">
        <h1>{{item.name}}</h1>
        <div class="contents">
          <span v-for="(item1,index1) in item.childList" :key="index1">
          <p>{{item1.name}}</p>
              <el-tooltip class="item" effect="dark" :content="item1.content || ''" placement="bottom">
       <el-progress type="circle" :percentage="item1.fraction"
                    :title="item1.fraction"
       ></el-progress>
            </el-tooltip>

          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[
          {
            name:'技术类',
            childList:[
              {
                name:'Html5',
                fraction:65,
                content:'熟练使用html5相关的东西'
              },
              {
                name:'Css(2&&3)',
                fraction:65,
                content: '有扎实的 HTML(5) 和 CSS(3) 功底，熟悉流式布局和弹性盒子布局，能处理主流浏览器的兼容问题。'
              },
              {
                name:'Js',
                fraction:25,
                content:'熟练使用js相关的东西'
              },
              {
                name:'Es6+',
                fraction:30,
                content:'熟练使用Es6相关的东西'
              },
              {
                name:'Vue.js',
                fraction:21,
                content:'熟练使用Vue.js相关的东西'
              },
            ]
          }
      ]
    }
  },
}

</script>
<style lang="scss" scoped>
.content{
  .box-card{
    position: fixed;
    right: 10px;
    top:50%;
    width: 40%;
  }
}
.pogress{
  text-align: center;
  .contents{
    display: flex;
    justify-content: space-between;
    >span{
      margin: 20px;
    }
  }
}

</style>
