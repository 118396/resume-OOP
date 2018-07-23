// window.View = function(selector){//用 window 可以让其他人访问；给一个选择器
//     return document.querySelector(selector)  //返回一个函数   
//     // return {
//     //     element:document.querySelector(selector)
//     // }  //返回一个对象
// }
//将 View 封装

window.View = function(selector){
    return document.querySelector(selector)
  }