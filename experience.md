# Experience

## In todosProject

- 向body中添加背景

```vue
beforeCreate: function() {
    document.getElementsByTagName("body")[0].className="add_bg";
},
beforeDestroy: function() {
    document.body.removeAttribute("class","add_bg");
}
```

- css使垂直居中

```css
top 0
bottom 0
margin auto 0
```

- localStorage

写入
`localStorage.setItem(key,value)//key任意设置`

读取
`localStorage.getItem(key)`

- v-model 使用computed
要设置get()和set(newValue,oldValue)方法

- watch
watch如果要监测对象中的数据变化需要使用deep

```vue
 watch:{
    todos:{
        deep:true,
        handler:function(newItem){
            itemStorage.save(newItem)
        }
    }
}
```

## 兄弟组件通信

使用PubSubJS的消息发布与订阅模式
订阅: 在created钩子函数中订阅消息
`PubSub.subscribe('消息名称',(event,data)=>{//要想使用this得到实例中的数据，要使用箭头函数，否则this指向PubSub})`
发布:
`PubSub.publish('消息名称',data)`

