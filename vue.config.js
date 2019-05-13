var path = require('path')
module.exports = {
    //基本路径
    publicPath: '/',
    outputDir: 'dist',
    //静态资源目录
    assetsDir: 'static',
    //eslint-loader 是否在保存的时候检查
    lintOnSave: process.env.NODE_ENV !== 'production',
    //生产环境是否生产sourceMap
    productionSourceMap: false,
    //是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,
    // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
    transpileDependencies: [],
    // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
    // corsUseCredentials: false,
    // webpack 配置，键值对象时会合并配置，为方法时会改写配置
    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    configureWebpack:{
        // 简单/基础配置，比如引入一个新插件
        resolve: {
            alias: {
              'vue$': 'vue/dist/vue.esm.js' 
            }
        }
    },

    // webpack 链接 API，用于生成和修改 webapck 配置
    // https://github.com/mozilla-neutrino/webpack-chain
    // chainWebpack: (config) => {
    //     // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    //     config.optimization
    //         .splitChunks({
    //             cacheGroups: {}
    //         });

    //     // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    //     config.module
    //         .rule('eslint')
    //         .exclude
    //         .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
    //         .end()
    // },
    devServer: {
        open: true,
        host: "127.0.0.1",
        port: 8081, //服务端口
        https: false,
        hotOnly: false,
        proxy: {
             //配置跨域
             '/api': {
                target: "http://192.168.2.13:8090",
                ws:true,
                changOrigin:true,
                pathRewrite:{
                    '^/api':'/'
                }
            }
        }, //设置代理
        // before: app => {}
    },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1,

    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},

    // 第三方插件配置
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'stylus',
        patterns: [
            path.resolve(__dirname, './src/style/reset.styl')
        ]
      }
    },

    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 40, // 换算的基数
                        selectorBlackList: [], // 忽略转换正则匹配项
                        propList: ['*'],
                    }),
                ]
            }
        }
    },
}
