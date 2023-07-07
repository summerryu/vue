<template>
  <div class="left">
    <div>{{ change }}</div>
    <!-- 부모컴포넌트에서 전달받은 데이터값은 지금은 수정이 불가능하다. -->
    <img :src="leftData.imgs">
    <p>{{ leftData.catagory }}</p>
    <h3>{{ leftData.title }}</h3>
    <p>{{ leftData.uploadData }}</p>
  </div>
</template>

<script>
export default {
    name:"ShopLeft",
    props:{
      leftData:Object,
      change:Boolean
    }
}
</script>

<style>
    .left{
        border: 1px solid pink;
    }
</style>