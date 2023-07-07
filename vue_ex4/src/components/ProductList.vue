<template>
  <div class="prdList">
    <h3>{{ prdTest.title }}</h3>
    <p>{{ prdTest.context }}</p>
    <span>{{ prdTest.price }}원</span>
  </div>
  <ul>
    <li>{{ prdArray.no}}</li>
    <li>{{ prdArray.auther}}</li>
  </ul>

  
</template>

<script>
export default {
    name:"ProductList",
    props:{
        prdTest:Object,
        prdArray:Array,
       
    }
}
</script>

<style>
    .prdList{
        border: 1px solid #000;
        margin: 0 20px;
        width: 300px;
        height: 200px;
    }
    .DayList{
        border: 1px solid #000;
        margin: 0 20px;
        width: 300px;
        height: 200px;
    }
</style>