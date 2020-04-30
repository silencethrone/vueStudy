<template>
    <div>
        <button @click="isShow=!isShow">click to show</button>
        <transition name="demo">
            <div div v-show="isShow">Hello World!</div>
        </transition>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:false
        }
    }
}
</script>
<style lang="stylus" scoped>
    .demo-enter-active,.demo-leave-active{
        transition all 1s
        opacity 1
        
    }
    .demo-enter,.demo-leave-to{
        opacity 0
        transform scale(2)
    }
</style>