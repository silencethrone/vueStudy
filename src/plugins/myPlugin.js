    const myPlugin = {};

    myPlugin.install = function (Vue) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
          // 逻辑...
          alert("myPlugin.myGlobalMethodMethod全局方法调用了")
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive', {
          inserted (el, binding) {
            // 逻辑...
            el.innerHTML += "<br/>myPlugin.my-directive指令被调用了" + binding.value
            console.log(binding)
          }
        })
      
        
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (value) {
          // 逻辑...
          alert("vue实例方法$myMethod被调用了："+value)
        }
      }
    export default myPlugin