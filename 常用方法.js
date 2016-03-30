// 写成类的格式

//js原生没有trim方法，自己写用到了正则表达式
String.prototype.trim=function(){
　　    return this.replace(/(^\s*)|(\s*$)/g, "");
}
//删除左边的空格
String.prototype.ltrim=function(){
　　    return this.replace(/(^\s*)/g,"");
}
//删除右边的空格
String.prototype.rtrim=function(){
　　    return this.replace(/(\s*$)/g,"");
}
　　
// 写成函数的格式

//删除左右两端的空格
function trim(str){ 
　　 return str.replace(/(^\s*)|(\s*$)/g, "");
}
//删除左边的空格
function ltrim(str){ 
　　 return str.replace(/(^\s*)/g,"");
}
//删除右边的空格
function rtrim(str){ 
　　 return str.replace(/(\s*$)/g,"");
}
//汉字校验
function isChinese(str)
 {
   var reg=/^[\u4e00-\u9fa5]+$/i;
  if(reg.test(str))
  {//中文校验成功
      return true;
  }else
  {
  return false;
  }
 }
