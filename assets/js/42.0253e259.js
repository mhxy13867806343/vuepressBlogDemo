(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{601:function(n,e,p){"use strict";p.r(e);var t=p(81),i=Object(t.a)({},(function(){var n=this,e=n.$createElement,p=n._self._c||e;return p("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[p("sourecs",[p("div",[p("h1",[n._v("推荐常用的webpack/vue-cli打包所使用的npm包")]),n._v(" "),p("div",[p("div",[p("h5",[n._v("包名称:")]),n._v(" "),p("el-link",{attrs:{target:"_blank",underline:!1,title:"将单个文件或整个目录复制到构建目录",href:"https://www.npmjs.com/package/copy-webpack-plugin"}},[n._v("copy-webpack-plugin")])],1),n._v(" "),p("p",[n._v("使用方法")]),n._v(" "),p("pre",[n._v("            const CopyWebpackPlugin = require('copy-webpack-plugin')\n                configureWebpack: {\n                       plugins:[\n                        new CopyWebpackPlugin({\n                                patterns: [\n                                  { from: 'src/path', to: '' }\n                                ]\n                              })\n                       ]\n                }\n            ")]),n._v(" "),p("div",[p("h5",[n._v("包名称:")]),n._v(" "),p("el-link",{attrs:{target:"_blank",underline:!1,title:"提供带 Content-Encoding 编码的压缩版的资源",href:"https://www.npmjs.com/package/compression-webpack-plugin"}},[n._v("compression-webpack-plugin")])],1),n._v(" "),p("p",[n._v("使用方法")]),n._v(" "),p("pre",[n._v('                        const CompressionWebpackPlugin = require("compression-webpack-plugin");\n                            configureWebpack: {\n                                   plugins:[\n                                   new CompressionWebpackPlugin({\n                                           // filename: \'[path].gz[query]\',\n                                           algorithm: "gzip",\n                                           test: new RegExp("\\\\.(" + productionGzipExtensions.join("|") + ")$"),\n                                           threshold: 10240, //对超过10k的数据进行压缩\n                                           minRatio: 0.6, // 压缩比例，值为0 ~ 1\n                                           deleteOriginalAssets:false\n                                         }),\n                                   ]\n                            }\n                        ')])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);