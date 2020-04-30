<template>
    <div>
        <div
        v-for="todo in todos"
        :key="todo.id"
        :class="['todolist',todo.isCompleted?'completed':'']"
        >
            <!-- 是否完成？ -->
            <input 
            v-model="todo.isCompleted"
            type="checkbox">
            <!-- todo的内容 -->
            <div>{{todo.text}}</div>
            <!-- 删除按钮 -->
            <button class="destory"
            @click="deleteItem(todo)"
            ></button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        todos:{
            type:Array,
            required:true
        }
    },
    data(){
        return {
        }
    },
    methods: {
        deleteItem(todo){
            if(todo.isCompleted){
                this.$emit("deleteItem",todo.id)
            }
            else if(confirm("尚未完成,仍要删除？")){
                this.$emit("deleteItem",todo.id);
            }

            
            
        }
    },
}
</script>
<style lang="stylus" scoped>
    .todolist
        position relative
        margin 0 auto
        width 600px
        background white
        border-bottom 1px solid #9d9d9d
        input
            position absolute
            text-align none
            left 20px
            top 0
            bottom 0
            margin auto 0
            height 30px
            width 30px
        div
            margin-left 70px
            box-sizing border-box
            width 510px
            line-height 1.2
            font-size 32px
            text-align left 
            padding 15px 60px 15px 15px
            white-space pre-line
            word-break break-all
        &:hover
            .destory::after{
                content "X"
            }
        .destory
            position absolute
            right 10px
            top 0
            bottom 0
            margin auto 0
            border none 
            outline none
            background-color transparent
            width 30px
            height 30px
            font-size 25px
            appearance none
            cursor pointer
    .completed>div
        color #9d9d9d
        text-decoration line-through

</style>