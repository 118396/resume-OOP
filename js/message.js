!function(){
 var model = Model({resourceName:'Message'})
  var view = View('section.message')
  var controller = Controller({
    init: function(view,controller){
      this.messageList = view.querySelector('#messageList') //从 view 里面找到messageList
      this.form = view.querySelector('form')
      this.loadMessages()
    },
    loadMessages: function(){
      this.model.fetch().then(
        (messages) => {
        let array = messages.map((item)=> item.attributes)
        array.forEach((item) => {
          let li = document.createElement('li') //创建元素
          li.innerText = `${item.name}: ${item.content}`//用户输入的东西
          this.messageList.appendChild(li)//插到页面里
        })
      }
    )
    },
    bindEvents: function(){ // bindEvents 除了绑定事件以外，其他事情都不做
     
      this.form.addEventListener('submit', (e)=>{
        e.preventDefault()//阻止刷新页面
        this.saveMessage()
      })
    },
   saveMessage: function(){
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value//找到名字叫 content 的 input
      let name = myForm.querySelector('input[name=name]').value
      this.model.save(
       {'name': name, 'content': content  //对象
      }).then(function (object) {
        let li = document.createElement('li') 
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
        myForm.querySelector('input[name=content]').value=''//让 input 的 value 等于空字符串
       // window.location.reload() //自动刷新
      })
    }
  }) 
  controller.init(view,model)
}.call()






//   var controller = {
//     view : null,
//     model : null,
//     messageList: null,
//     init: function(view, model){
//       this.view = view // 获取到 view
//       this.model = model

//       this.messageList = view.querySelector('#messageList') //从 view 里面找到messageList
//       this.form = view.querySelector('form')//找到 form
//       this.model.init() //初始化 
//       this.loadMessages() // 加载Message
//       this.bindEvents() //绑定事件
//     } ,
//     loadMessages: function(){
//       this.model.fetch().then(
//         (messages) => {
//         let array = messages.map((item)=> item.attributes)
//         array.forEach((item) => {
//           let li = document.createElement('li') //创建元素
//           li.innerText = `${item.name}: ${item.content}`//用户输入的东西
//           this.messageList.appendChild(li)//插到页面里
//         })
//       }
//     )
//     },
//     bindEvents: function(){ // bindEvents 除了绑定事件以外，其他事情都不做
     
//       this.form.addEventListener('submit', (e)=>{
//         e.preventDefault()//阻止刷新页面
//         this.saveMessage()
//       })
//     },
//    saveMessage: function(){
//       let myForm = this.form
//       let content = myForm.querySelector('input[name=content]').value//找到名字叫 content 的 input
//       let name = myForm.querySelector('input[name=name]').value
//       this.model.save(
//        {'name': name, 'content': content  //对象
//       }).then(function (object) {
//         let li = document.createElement('li') 
//         li.innerText = `${object.attributes.name}: ${object.attributes.content}`
//         let messageList = document.querySelector('#messageList')
//         messageList.append(li)
//         myForm.querySelector('input[name=content]').value=''//让 input 的 value 等于空字符串
//        // window.location.reload() //自动刷新
//       })
//     }
//   }
//   controller.init(view,model)

// }.call()



// 为什么监听 submit 而不是 button 
// 因为需要监听 submit 和 回车两个事件

 // 不用 for 循坏
 // 用 forEach 和 map

 


/*
// 创建 TestObject 表
var x = AV.Object.extend('wh2');
//在表中创建一行数据
var o = new x();
// 数据内容是 words：'Hello World!'
// 如果保存成功，则运行 alert
o.save({
  words: 'Hi'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/

