window.Controller = function(options){ // 传一个自己的 init
    var init = options.init
    let object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view 
            this.model = model
            this.model.init()  
            init.call(this,view,model)
            this.bindEvents.call(this) 
        },
    }
    console.log('object')
    console.log(object)
    debugger
    console.log('options')
    console.log(options)
    debugger
    for(let key in options){ //把 options 上的所有东西都赋值到 object 上，除了 init
       if (key !== 'init') //如果 key 不是  init 
        object[key] = options[key] //就赋值到 opject
    }
    console.log('新的object')
    console.log(object)
    debugger
    return object
    }