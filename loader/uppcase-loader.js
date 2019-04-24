module.exports = function (src) {

  if (src) {
 
   console.log('--- uppcase-loader input:', src)
 
   src = src.toUpperCase()
 
   console.log('--- uppcase-loader output:', src)
 
  }
 
  return src;
 
 }