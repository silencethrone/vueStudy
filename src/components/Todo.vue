<template>
    <div class="todo">
        <div class="inputtext">
            <div class="icon" @click="completeAll"></div>
            <input  type="text"
            placeholder="What needs to be done?"
            autofocus="autofocus"
            @keyup.enter="addItem"
            >
        </div>
        <todo-item 
        :todos="todos"
        @deleteItem="deleteItem"
        ></todo-item>
    </div>
</template>
<script>
    import todoItem from "./TodoItem"

    const STORAGE_KEY = "items-vuejs"
    const itemStorage = {
        // 获取数据
        fetch(){
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') 
        },
        // 保存数据
        save(items){
            localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
        }
    }

    export default {
        components:{
            todoItem,
        },
        data(){
            return {
                todos:itemStorage.fetch(),
                todoId:0,
            }
        },
        methods: {
            addItem:function(event){
                if(event.target.value.trim()!=""){
                    this.todos.unshift({
                        id:this.todos.length+1,
                        text:event.target.value,
                        isCompleted:false
                    });
                    event.target.value="";
                }
            },
            deleteItem(id){
                var index=this.todos.findIndex(element=>element.id === id);
                this.todos.splice(index,1);
            },
            completeAll(){
                this.todos.forEach(element => {
                    element.isCompleted=true
                });
            }
        },
        watch:{
            todos:{
                deep:true,
                handler:function(newItem){
                    itemStorage.save(newItem)
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .todo
        margin-top 40px
    .inputtext
        width 600px
        height 90px
        background-color white
        margin 0 auto
        border-bottom 1px solid #666
        &>.icon
            float left
            height 90px
            width 100px
            background url('../assets/images/下拉.png') no-repeat center
            cursor pointer
        &>input
            float left
            height 90px
            width 500px
            border none
            outline none
            font-size 32px
</style>
