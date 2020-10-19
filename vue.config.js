const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    //配置入口
    pages:{
        index:{
            entry:'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: {
        //配置文件别名
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('packages'),
                'assets': resolve('examples/assets'),
                'views': resolve('examples/views'),
            }
        },
        //暴露默认导出配置
        output:{
            libraryExport:'default'
        }
    },
    //关闭source map，减少打包编译的时间
    productionSourceMap: false,

    //是否将组件中的 CSS 提取至一个独立的 CSS 文件中
    css:{
        extract:false
    },
    //配置devServer项
    devServer:{
        host: '0.0.0.0',
        port:8080,
        hot:true
    }
}