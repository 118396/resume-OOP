//  var model = Model({resourceName:'Message'})  使用者
// model.init()
// model.fetch()
// model.save({name:'xxx',content: 'xxx'})
// model 办事，我放心
// model 就是一个模板

window.Model = function(options){
    let resourceName = options.resourceName  //resource name 资源名称
    return{
        init: function(){
            var APP_ID = 'Ne1RJ5Dtcxs7SCfTbLJj9KOH-gzGzoHsz'
            var APP_KEY = 'kDVSo8HhSCsPof8zfw508r2T'
            AV.init({appId: APP_ID, appKey: APP_KEY })
        },
        fetch: function(){
            var query = new AV.Query(resourceName); //闭包 用到了函数之外的变量
            return query.find()
        }, //需要一个参数，参数是在Controller函数中给
        save: function(object){ //接受一个对象
            var x = AV.Object.extend(resourceName);
            var x = new x();
            return x.save(object)
        }
    }
}

//一个函数返回了一个对象，只要调这个函数就会得到这个函数
// 每个对象的 init 是相同的
// 每个 fetch 是 resourceName 来确定的