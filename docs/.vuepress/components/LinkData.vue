<template>
  <div class="content">
   <div class="data" v-for="(item,index) in list" :key="index">
     <h1 :title="item.name">{{item.name}}</h1>
     <div class="data-child" v-for="(a,b) in item.data" :key="b">
       <h5 :title="a.name">{{a.name}}</h5>
       <el-link   v-for="(p1,p2) in a.childList" :key="p2" :underline="false"
                  :href="p1.link" target="_blank" :title="p1.name">{{p1.name}}</el-link>
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
          name:'文档类',
          data:[
            {
              name:'css文档',
              childList: [
                {
                  name:'Sass (3.4.21) 中文文档',
                  link: 'https://www.html.cn/doc/sass/'
                }
              ]
            },
            {
              name:'jquery文档',
              childList: [
                {
                  name:'jQuery API 中文文档(适用jQuery 1.0 - jQuery 3.3.1) ',
                  link: 'https://www.html.cn/jqapi-1.9/'
                }
              ]
            },
            {
              name:'better-scroll文档',
              childList: [
                {
                  name:'better-scroll 是什么 ',
                  link: 'https://better-scroll.github.io/docs-v1/doc/zh-hans/#better-scroll%20%E6%98%AF%E4%BB%80%E4%B9%88'
                }
              ]
            }
          ]
        },
        {
          name:'技术类',
          data:[
            {
              name:'vue相关的ui库',
              childList: [
                {
                  name:'将 vant-weapp 转化成 uniapp 组件，目前基于 vant-weapp@1.3.3 版本进行转化',
                  link: 'https://auven.github.io/vant-weapp-convert-uniapp/#/intro'
                },
                {
                  name:'uni-app扩展组件',
                  link: 'https://hellouniapp.dcloud.net.cn/pages/tabBar/extUI/extUI'
                }
              ]
            },
            {
              name:'vue3相关',
              childList: [
                {
                  name:'vue3（中文文档）',
                  link: 'https://v3.cn.vuejs.org/'
                },
                {
                  name:'vue3（英文文档）',
                  link: 'https://vue3js.cn/docs/'
                },
                {
                  name:'vue3(api中文)文档',
                  link: "https://vue3js.cn/vue-composition-api/"
                },
                {
                  name:'vue3(组合式 API 征求意见稿中文)文档',
                  link: "https://vue3js.cn/vue-composition/"
                },
                {
                  name:'Vue3源码(中文)',
                  link: 'https://vue3js.cn/start/'
                }
              ]
            },
            {
              name:'vue全家桶',
              childList: [
                {
                  name:'Vue CLI(中文)',
                  link: 'https://cli.vuejs.org/zh/'
                },
                {
                  name:'axios(英文)',
                  link: 'https://github.com/axios/axios'
                },
                {
                  name:'vue2(中文)文档',
                  link: 'https://doc.vue-js.com/v2/api/'
                },
                {
                  name:'vuex(中文)文档',
                  link: 'https://vuex.vuejs.org/zh/guide/'
                },
                {
                  name:'vue-router(中文)',
                  link: 'https://router.vuejs.org/zh/'
                },
                {
                  name:'NuxtJS(中文)文档',
                  link: 'https://www.nuxtjs.cn/'
                }
              ]
            },
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
                  name:'css文档(中文)',
                  link:'http://css.doyoe.com/'
                },
                {
                  name:'caniuse(查看css之类属性的兼容性之类的问题)',
                  link:'https://caniuse.com/'
                },
                {
                  name:'Animate.css 随便添加CSS动画',
                  link: 'https://animate.style/'
                },
                {
                  name:'Normalize.css使浏览器更一致地渲染所有元素，并符合现代标准。它只针对需要规范化的样式。',
                  link: 'http://necolas.github.io/normalize.css/'
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
                  name:'d3-API 文档 ( 中文版 )',
                  link: 'https://github.com/xswei/d3js_doc'
                },
                {
                  name:'es6',
                  link:'https://es6.ruanyifeng.com/'
                },
                {
                  name:'ES6 教程(镜像)',
                  link: 'https://wangdoc.com/es6/'
                },
                {
                  name:'babel',
                  link: 'https://babel.dev/'
                },
                {
                  name:'echarts(中文)',
                  link: 'https://echarts.apache.org/zh/index.html'
                },
                {
                  name:'jskatas',
                  link: 'https://jskatas.org/'
                },
                {
                  name:'JavaScript 标准参考教程（alpha）',
                  link: 'https://javascript.ruanyifeng.com/'
                }
              ]
            },
            {
              name:'Vue&&Vue-Cli',
              childList: [
                {
                  name:'vue2(中文)文档',
                  link:'https://cn.vuejs.org/'
                },
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
              name:'vue表格类插件',
              childList: [
                {
                  name:' vue-easytable(中文)',
                  link: 'http://doc.huangsw.com/vue-easytable/app.html#/intro'
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
                {
                  name:'ShowDoc一个非常适合IT团队的在线API文档、技术文档工具',
                  link: 'https://www.showdoc.com.cn/'
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
                },
                {
                  name:'SASS 转 CSS',
                  link: 'https://www.dute.org/sass-to-css'
                },
                {
                  name:'devdocs',
                  link: 'https://devdocs.io/'
                }
              ]
            }
            ]
        },
        {
          name:'优秀类',
          data:[
            {
              name:'博客',
              childList: [
                {
                  name:'深入理解Vue.js实战',
                  link: 'https://godbasin.github.io/vue-ebook/vue-ebook/0.html'
                },
                {
                  name:'Vue3.0(网友的博客)',
                  link: 'https://vue3js.cn/'
                },
                {
                  name:'一个面向 RESTful API 设计的开箱即用主题(网友的博客)',
                  link: 'https://blog.sqrtthree.com/vuepress-theme-api/zh/getting-started/'
                },
                {
                  name:'uniapp实现左右滑动长列表',
                  link: 'https://q32757468.github.io/2019/11/29/uniapp%E5%AE%9E%E7%8E%B0%E5%B7%A6%E5%8F%B3%E6%BB%91%E5%8A%A8%E9%95%BF%E5%88%97%E8%A1%A8/'
                }
              ]
            }
          ]
        },
        {
          name:'论坛类',
          data:[
            {
              name:'forum(可能有英文)',
              childList: [
                {
                  name:'Vue Forum论坛(中文)',
                  link: 'https://forum.vuejs.org/'
                }
              ]
            }
          ]
        },
        {
          name:'文档类',
          data:[
            {
              name:'Markdown',
              childList: [
                {
                  name:'Markdown文件(中文)',
                  link: 'https://markdown.tw/'
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
