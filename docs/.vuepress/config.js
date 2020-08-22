
module.exports = {
    title: '200s\'s 的个人博客区',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '主页', link: '/' },
        {text: '前端', link: '/fe/' },
        { text:'es6',link:'/es6/'},
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
              { text: '掘金', link: 'https://juejin.im/user/1310273588955581' },
              { text: 'github', link: 'https://juejin.im/user/1310273588955581' },
              { text: '微博', link: 'https://weibo.com/fangjiayu1107' }
             
            ]
          },
          { text: '我的作品', link: '/works/' },
          { text: '友情链接', link: '/link/' },
        {text: '关于', link: '/about/'}      
      ],
      sidebar:{
        '/es6/':[
            ['','目录'],
            {
                title: '笔记',   // 必要的
                path: '/es6/note/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
              },
          ]
      }

    }
  };