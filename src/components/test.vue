<template>
    <div>
        A:<input type="text" v-model="A">
        <br>
        B:<input type="text" v-model="B">
        <br>
        sum: <input type="text" v-model="sum">
    </div>
</template>

<script>
export default{
    name:"test",
    data(){
        return {
            A:0,
            B:0,
        }
    },
    computed: {
        sum:function(){
            return parseFloat(this.A) + parseFloat(this.B)
        }
    },
}

</script>