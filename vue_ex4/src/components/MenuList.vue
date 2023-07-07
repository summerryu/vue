<template>
    <li class="DayList">
        <div>{{ menuList.category }}</div>
        <span>{{ menuList.title }}</span>
    </li>
</template>

<script>
export default {
    name:"MenuList",
    props:{
        menuList:Array
    }
}
</script>

<style>
    .DayList{
        
        border: 1px solid #000;
        margin: 0 20px;
        width: 300px;
        height: 200px;
    }
</style>