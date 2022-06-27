module.exports = {
  '/fe/':[
    ['','前端首页'],
    {
      title: '资源',   // 必要的
      path: '/fe/source/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
    },
    {
      title: 'html',   // 必要的
      path: '/fe/html/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
    },
    {
      title: 'css',   // 必要的
      path: '/fe/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children:[
        { title: 'css世界', path:'css/world/'}
      ]
    },
    {
      title: 'js',   // 必要的
      path: '/fe/js/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children:[
        { title: '你不知道js上中下', path:'js/js/'},
        { title: 'webpack', path:'js/webpack/'},
        { title: '设计模式和数据结构', path:'js/design-patterns-and-data-structures/'},
      ]
    },

    {
      title: '其他',   // 必要的
      path: '/fe/qt/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
    },
  ],
  '/vue/':[
    ['','vue首页'],
    {
      title: '我的笔记',   // 必要的
      path: '/vue/note/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
    },
    {
      title: '资源',   // 必要的
      path: '/vue/source/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
    },
  ],
  '/link/':[
    ['','链接目录'],
    {
      title: '资源',   // 必要的
      path: '/link/source/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
    },
  ],
  '/es6/':[
    ['','es6目录'],
    {
      title: '笔记',   // 必要的
      path: '/es6/note/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
    },
    {
      title: '常用',   // 必要的
      path: '/es6/commonly/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
    },
  ]

}
