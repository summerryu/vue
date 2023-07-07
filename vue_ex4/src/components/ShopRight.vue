<template>
    <div class="right">
        <div class="box" v-for="(boxs,i) in rightData" :key="i">
            <img :src="boxs.imgs">
            <h3>{{ boxs.title }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name:"ShopRight",
    props:{
        rightData:Array
    }
}
</script>

<style>
    .right{
        display: flex;
        flex-wrap: wrap;
        width:700px;
    }
    .right > .box { border:1px solid #000; margin:20px; width:300px; height: 400px;}

    .right > .box img { width:100%; }
</style>