<template>
  <div class="container">
    <h2>{{ contTitle }}</h2>
    <p>{{ contTitle }}</p>
  </div>
</template>

<script>
export default {
    name:"ContainerContent",
    //data(){} < 해당 컴포넌트에서만 사용하는 데이터
    //props{} < 부모 컴포넌트에서 전달받은 데이터값
    // : 데이터값유형
    props:{
        // 부모컴포넌트에서 전달한 속성명 똑같이사용
        contTitle:String
    }
}
</script>

<style>
    .container{ border:1px solid #000; margin-bottom: 100px; }
</style>