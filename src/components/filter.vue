<template>
    <div v-my-directive="1+2">
        filterTest:
        {{testText | filterA}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            testText:"025-58750360"
        }
    },
    filters:{
        filterA(value){
            var reg=/^0\d{2,3}-\d{7,8}$/;
            console.log("正则验证："+reg.test('025-58750360')) 
            return value.replace(reg,"ok!");
        }
    }
}
</script>