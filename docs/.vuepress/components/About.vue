<template>
  <div class="content">
    <div @click="isWidth">
      <el-card class="box-card" :style="{width:width+'%'}" >
        <p>邮箱:
          <el-link :underline="false" target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=869710179@qq.com">点击写信</el-link>
        </p>
        <h1>关于我</h1>
        <el-divider />
        <div>
          <p>我是一个简单的"next"</p>
          <p>目前在杭州的一家互联网公司供职,主要负责web前端,h5,小程序及app端的开发与制作</p>
        </div>
        <h1>我的微信二维码</h1>
        <div>
          <p>    <el-image :src="require('./mmqrcode1598424624600.png')"></el-image></p>
        </div>
      </el-card>
    </div>
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
		<div class="experienced">
			<h1>有关经历</h1>
			<el-steps direction="vertical" :active="1">
				<el-step title="2021年(05月份)-至今">
					<template #description>
						<div class="description">
							在<span>杭州红动网络科技有限公司</span>就职，从事于h5前端的开发,项目请点击作品链接查看
						</div>
					</template>
				</el-step>
				<el-step title="2021年(11月份)-2022年(05月份)">
					<template #description>
						<div class="description">
							在<span>宁波银行</span>就职，从事于h5前端的开发,开发宁波银行app(项目采用前后端分离，app端采用混合式进行开发)
						</div>
					</template>
				</el-step>
				<el-step title="2020年(05月份)-2021年(05月份)">
					<template #description>
						<div class="description">
							在<span>宁波含包阁网络有限公司</span>就职，从事于h5前端的开发,开发小程序，h5，及安卓（uniapp）app应用程序的开发,项目请点击作品链接查看
						</div>
					</template>
				</el-step>
				<el-step title="2019年(05月份)-2020年(04月份)">
					<template #description>
						<div class="description">
							在<span>嘉兴驴行网络科技有限公司</span>就职，从事于h5前端的开发,开发小程序应用程序的开发,项目请点击作品链接查看
						</div>
					</template>
				</el-step>
				<el-step title="2018年(04月份)-2019年(03月份)">
					<template #description>
						<div class="description">
							在<span>浙江环鑫信息技术有限公司</span>就职，从事于h5前端的应用程序的开发,项目请点击作品链接查看
						</div>
					</template>
				</el-step>
				<el-step title="2016年(07月份)-2018年(04月份)">
					<template #description>
						<div class="description">
							在<span>浙江环鑫信息技术有限公司</span>就职，从事于h5前端的应用程序的开发,项目请点击作品链接查看
						</div>
					</template>
				</el-step>
			</el-steps>
		</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      width:10,
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
  computed:{
    transition(){
      if(this.width===1){
        return {
          transition: 'right'
        }
      } else {
        return {
          transition: 'right'
        }
      }
    }
  },
  methods:{
    isWidth(){
      this.width=this.width===10?40:10
    }
  }
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
  .icon{
    position: fixed;
    right: 20px;
    top:50%;
    font-size: 100px;
  }
  .icons{
    transition: right 1s;
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
