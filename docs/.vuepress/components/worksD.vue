<template>
<div class="content">
  <h1>我的相关作品</h1>
  <main v-for="(k,v) in list" :key="v">
    <h2>{{k.name}}</h2>
    <div class="datas" v-for="(x,y) in k.childList" :key="x+y"
         v-clipboard:success="clipboardSuccess"
         v-clipboard:copy="x.link"
    >
      <p>
        <span v-if="x.type=='pc'">{{x.name}}</span>
        <el-link :href="x.link" target="_blank" v-if="x.type!=='pc'"
				:underline="x.underline"
				> {{x.name}}</el-link>
       </p>
      <el-image :src="x.img" v-if="x.img"></el-image>
    </div>
  </main>
</div>
</template>

<script>
import clipboard from '../directive/clipboard/index.js'
export default {
  name: "worksD",
  directives: {clipboard},
  data(){
    return {
      list:[
				{
					name:'政府相关h5',
					childList:[
						{
							name:'群团集市',
							link:'https://m.hzszqt.com/#/',
							underline:true,
							type:'h5'
						},
						{
							name:'钱塘就业码学生端',
							link:'https://em-h5.redcross668.com/#/',
							underline:true,
							type:'h5'
						},
						{
							name:'钱塘就业码企业端',
							link:'https://em-h5-company.redcross668.com/#/',
							underline:true,
							type:'h5'
						},
						{
							name:'生命“髓”缘',
							link:'http://smsy.yhxxfw.cn:8081/#/',
							underline:true,
							type:'h5'
						},
						{
							name:'绍兴一体化捐赠救助平台',
							link:'https://yhby.redcross668.com/#/',
							underline:true,
							type:'h5'
						},
						{
							name:'大连市红十字会',
							link:'https://qgjxh5.redcross668.com/#/',
							underline:true,
							type:'h5'
						},
						{
							name:'计生协',
							link:'http://jsxwj.redcross668.com/#/',
							underline:true,
							type:'h5'
						},
					]
				},
        {
          name:'h5(wep app)端',
          childList:[
            {
              name:'Q店小铺商户管理系统(请使用微信客户端中手机访问)',
              link:'https://h5.nbqy.shop/#/',
              img:require('./Q店.png')
            },
            {
              name:'忆店思家商户管理系统(请使用微信客户端中手机访问)',
              link:'https://h5.sccxzj.com/#/',
              img:require('./SC.png')
            },
            {
              type:'pc',
              name:'MBO(h5端)',
              link:'https://juejin.im/post/6844903615417548814',
              img:`https://user-gold-cdn.xitu.io/2018/6/1/163ba0105f98ed19?imageView2/0/w/1280/h/960/format/webp/ignore-error/1`
            },
            {
              type:'pc',
              name:'小蜜云织造(h5端)',
              link:'https://juejin.im/post/6844903615417548814',
              img:`https://user-gold-cdn.xitu.io/2018/6/1/163ba106be07b27d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1`
            },
            {
              name:'紧商网',
              link:'https://www.jinshang9.com/weixin/',
              img:require('./QQ截图20200825105325.jpg')
            },
            {
              name:'中毛网',
              link:'https://www.chinamzz.com/',
              img:require('./k2.jpg')
            }
          ]
        },
        {
          name:'小程序端(微信部分)',
          childList: [
            {
              name:'防飞单ERP(进入微信搜索 防飞单ERP，就可以搜索到我开发的小程序)',
            },
            {
              name:'爱实汇商家版(进入微信搜索 爱实汇商家版，就可以搜索到我开发的小程序)',
            },
            {
              name:'爱实汇爱美食(进入微信搜索 爱实汇爱美食，就可以搜索到我开发的小程序)',
            }
          ]
        },
        {
          name:'pc后台管理系统',
          childList: [
            {
              type:'pc',
              name:'爱实汇后台商家管理系统',
              link:'https://juejin.im/post/6844904042167173133',
              img:`https://user-gold-cdn.xitu.io/2020/1/10/16f8d30d90d2e23d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1`
            }
          ]
        }
      ]
    }
  },
  methods:{
    clipboardSuccess(data){
      console.log(data);
      this.$message({
        message: '复制成功~请使用微信客户端中手机访问',
        type: 'success'
      });
    }
  }
}
</script>

<style scoped>

</style>
