const fs = require('fs')
function SvgSymbolInline (options = {}) {
  this.options = options
  // {
  //   path: 'svg/symbol/svg/sprite.symbol.svg'
  // }
}
SvgSymbolInline.prototype.apply = function (compiler) {
  const self = this
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
      self.insertSvg(htmlPluginData.html).then(function (html) {
        htmlPluginData.html = html
        callback(null, htmlPluginData)
      })
    })
  })
}

SvgSymbolInline.prototype.insertSvg = function (html) {
  const self = this
  return new Promise(function (resolve, reject) {
    fs.readFile(self.options.path, 'utf8', function (err, data) {
      if (err) throw err
      // 去除 symbol 文件头部的 xml 信息，设置元素隐藏

      data = data.replace(/()/, '$1 style="display:none;" ')
      console.log(data)
      // // 把 symbol 的内容插入 html 中
      // html = html.replace(/()/i, `$1${data}`)
      resolve(html)
    })
  })
}

module.exports = SvgSymbolInline