class MyPlugin {

  // 构造方法
 
  constructor (options) {
 
   console.log('MyPlugin constructor:', options)
 
  }
 
  // 应用函数
 
  apply (compiler) {
 
   // 绑定钩子事件
 
   compiler.plugin('compilation', compilation => {
 
    console.log('MyPlugin')
 
   })
  //  // 广播事件
  //  let params = {}
  //  compiler.apply('event-name',params)
  //  // 
   compiler.plugin('emit',function(compilation, callback) {
         
    // 处理完毕后执行 callback 以通知 Webpack
   
    // 如果不执行 callback，运行流程将会一直卡在这不往下执行
    callback();
   
   });
 
 }
}

module.exports = MyPlugin