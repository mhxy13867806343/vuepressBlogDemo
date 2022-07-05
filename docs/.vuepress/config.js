const sidebar =require('./config.sidebar')
module.exports = {
    title: '200s\'s 的个人博客区',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/vuepressBlogDemo/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '主页', link: '/' },
        {text: '前端', link: '/fe/' },
        { text:'es6',link:'/es6/'},
          {
              "text": "实例",
              "link": "/codes/"
          },
    {text: '前端框架',

    items:[
        {
            text:'vue',link:'/vue/',
        }
    ]
},
        {
            text: '社区',
            // 这里是下拉列表展现形式。
            items: [
              { text: '技术站', items:[
                      {text:'掘金',
                          link: 'https://juejin.im/user/1310273588955581'

                      },
                      {text: 'github', link: 'https://github.com/mhxy13867806343'

                      }, { text: '微博', link: 'https://weibo.com/fangjiayu1107' },
                  ] },
                { text: '笔记-语雀', items:[
                      {
                          text:'常用导航栏',
                          link: 'https://www.yuque.com/jscode/mu1sm1/yorp39'
                      },
                      {
                          text:'有关在vue2中使用@vue/composition-api与unplugin-vue2-script-setup使用记录说明',
                          link: 'https://www.yuque.com/jscode/rd7to5/dmlcys'
                      }
                  ] },
            ]
          },
          { text: '作品', link: '/works/' },
        {text: '关于', link: '/about/'},
          {text: '未来', link: '/future/'}
      ],
      sidebar:sidebar
    }
  };
