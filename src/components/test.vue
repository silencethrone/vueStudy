<template>
    <div>
        <h1 v-once>加载时间:{{nowTime}}</h1>
        <button @click="showTime">show time</button>
        <h1 v-if="isShow">现在时间:{{nowTime}}</h1>
    </div>
</template>

<script>
export default{
    name:"test",
    data(){
        return {
            nowTime:new Date().toLocaleString(),
            isShow:false
        }
    },
    methods: {
        showTime(){
            this.nowTime=new Date().toLocaleString();
            this.isShow=!this.isShow;
        }
    },
}

</script>