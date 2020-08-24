<template>
  <div class="content">
   <div class="data" v-for="(item,index) in list" :key="index">
     <h1>{{item.name}}</h1>
     <div class="data-child" v-for="(a,b) in item.data" :key="b">
       <h5>{{a.name}}</h5>
       <el-link   v-for="(p1,p2) in a.childList" :key="p2" :underline="false"
                  :href="p1.link" target="_blank">{{p1.name}}</el-link>
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
          name:'帮助类',
          data:[
            {
              name:'学习',
              childList: [
                {
                  name:'力扣(中文)',
                  link: 'https://leetcode-cn.com/'
                }
              ]
            }
          ]
        },
        {
          name:'技术类',
          data:[
            {
              name:'安装库的方式',
              childList:[
                {
                  name:'yarn',
                  link: 'https://classic.yarnpkg.com/zh-Hans/'
                }
              ]
            },
              {
            name:'Html',
            childList:[
              {
                name:'Markdown 入门参考',
                link: 'http://itmyhome.com/markdown/index.html'
              }
            ]
          },
            {
              name:'Css',
              childList:[
                {
                  name:'css文档',
                  link:'http://css.doyoe.com/'
                },
                {
                  name:'caniuse',
                  link:'https://caniuse.com/'
                }
              ]
            },
            {
              name:'Css预处理',
              childList:[
                {
                  name:'stylus文档',
                  link:'https://www.zhangxinxu.com/jq/stylus/'
                },
              ]
            },
            {
              name:'Js',
              childList: [
                {
                  name:'es6',
                  link:'https://es6.ruanyifeng.com/'
                }
              ]
            },
            {
              name:'Vue&&Vue-Cli',
              childList: [
                {
                  name:'vue-cli',
                  link:'https://cli.vuejs.org/zh/'
                },
                {
                  name:'vue-press',
                  link:'https://vuepress.vuejs.org/zh/'
                },
                {
                  name:'vue 组合式 API',
                  link: 'https://composition-api.vuejs.org/zh/'
                }
              ]
            },
            {
              name:'Ajax库',
              childList: [
                {
                  name:'axios英文文档',
                  link:'https://github.com/axios/axios'
                },
                {
                  name:'axios中文文档',
                  link:'https://www.kancloud.cn/yunye/axios/234845'
                }
              ]
            },
            {
              name:'vue(pc&&移动端ui库)',
              childList: [
                {
                  name:'vant(移动端)',
                  link:'https://youzan.github.io/vant/#/zh-CN/',
                  more:[{
                    name:'请问`uploader`组件`delete`事件如何阻止删除操作',
                    link: 'https://github.com/youzan/vant/issues/4114'
                  },
                    {
                      name:'vue+vant 购物车的全选和反选',
                      link: 'https://blog.csdn.net/wjswangjinsheng/article/details/91392694'
                    },
                    {
                      name:'vue使用vant-ui实现上拉加载、下拉刷新和返回顶部\n',
                      link: 'https://www.shuzhiduo.com/A/MAzAPYQRd9/'
                    },]
                },
                {
                  name:'element ui(pc)',
                  link:'https://element.eleme.cn/#/zh-CN/component/installation'
                },
                {
                  name:'cube-ui(移动端)',
                  link: 'https://didi.github.io/cube-ui/#/zh-CN'
                },
                {
                  name:'vux(移动端)',
                  link: 'https://doc.vux.li/zh-CN/'
                },
                {
                  name:'mand-mobile(移动端)',
                  link: 'https://didi.github.io/mand-mobile/#/zh-CN/home'
                },
                {
                  name:'ydui(移动端)',
                  link: 'http://vue.ydui.org/'
                },
                {
                  name:'Vuetify',
                  link: 'https://vuetifyjs.com/zh-Hans/'
                }
              ]
            },
            {
              name:'vue(pc后台管理系统)',
              childList: [
                {
                  name:'element-admin',
                  link:'https://panjiachen.github.io/vue-element-admin-site/zh/guide/'
                }
              ]
            },
            {
              name:'vue(js插件或者库)',
              childList:[
                {
                  name:'videojs(半中文文档)',
                  link: 'https://s0docs0videojs0com.icopy.site/'
                },
                {
                  name:'lodashjs(中文)',
                  link: 'https://www.lodashjs.com/'
                },
                {
                  name:'liriliri',
                  link: 'https://licia.liriliri.io/docs.html'
                },
                {
                  name:'Day.js',
                  link: 'https://day.js.org/zh-CN/'
                },
                {
                  name:'momentjs(中文)',
                  link: 'http://momentjs.cn/'
                },
                {
                  name:'better-scroll(中文和移动端)',
                  link: 'https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/#better-scroll%20%E6%98%AF%E4%BB%80%E4%B9%88',
                  more: [
                    {
                      name:'vue使用better-scroll制作左右菜单联动以及vant框架导致滚动失效的解决办法',
                      link: 'https://www.mulingyuer.com/archives/398/'
                    }
                  ]
                },
                {
                  name:'better-scroll2.x(中文和移动端)',
                  link: 'https://better-scroll.github.io/docs/zh-CN/guide/#betterscroll-%E6%98%AF%E4%BB%80%E4%B9%88'
                },
                {
                  name:'vue-waterfall2瀑布流',
                  link: 'https://github.com/AwesomeDevin/vue-waterfall2',
                  more:[
                    {
                      name:'vue-waterfall2 实现瀑布流，出现上拉加载的bug',
                      link: 'https://blog.csdn.net/weixin_45835771/article/details/105759524'
                    },
                    {
                      name:'Vue 瀑布流组件',
                      link:'https://www.ctolib.com/heikaimu-vue-waterfall-plugin.html'
                    },
                  ]
                }
              ]
            },
            {
              name:'源码(vue之类的)',
              childList:[
                {
                  name:'逐行剖析 Vue.js 源码',
                  link: 'https://vue-js.com/learn-vue/',
                  more: [
                    {
                      name:'vue hooks',
                      link: 'https://zhuanlan.zhihu.com/p/50861734'
                    }
                  ]
                },
              ]
            },
            {
              name:'接口方式',
              childList:[
                {
                  name:'网易云音乐 NodeJS 版 API',
                  link: 'https://binaryify.github.io/NeteaseCloudMusicApi/#/'
                },
              ]
            },
            {
              name:'ts',
              childList:[
                {
                  name:'TypeScript 入门教程',
                  link: 'https://ts.xcatliu.com/'
                },
              ]
            },
            {
              name:'uni-app&&taro(1.x,2.x,3.x++)',
              childList:[
                {
                  name:'uviewui',
                  link: 'https://www.uviewui.com/'
                },
              ]
            },
            {
              name:'其他',
              childList:[
                {
                  name:'vuejsexamples(英文)',
                  link: 'https://vuejsexamples.com/tag/ui/'
                },
                {
                  name:'vue视频播放插件vue-video-player',
                  link: 'https://juejin.im/post/6844903989641740296',
                  more:[
                    {
                      name:'videoJs常用方法、事件、VUE中使用的注意事项',
                      link:'https://blog.csdn.net/qq_42842709/article/details/84942207'
                    },
                    {
                      name:'vue项目利用vue-video-player实现视频兼容IOS和安卓放大播放\n',
                      link: 'https://blog.csdn.net/zhan_lijian/article/details/83792345'
                    }
                  ]
                },

                {
                  name:'常用的URL Scheme',
                  link: 'https://www.jianshu.com/p/85aeae988443'
                },
                {
                  name:'67 个拯救前端开发者的工具、库和资源',
                  link: 'https://segmentfault.com/a/1190000014162502'
                }
              ]
            }
            ]
        },

      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.data{
  h1{
    padding:0;
    margin: 0;
  }
  .data-child{
    /deep/ .el-link{
      padding:20px;
    }
  }
}
</style>
