<template>
  <div class="staff"> <!-- v-for="(list,i) in staff" :key="i" -->
    <h2>{{ staff[$route.params.id].name }}</h2>
    <p>{{ staff[$route.params.id].introduce }}</p>
  </div>

  <div>
    <router-link to="/">메인으로</router-link>
  </div>
</template>

<script>
export default {
    name:"StaffComp",
    props:{
        // 부모 컴포넌트한테 전달받은 데이터중에 사용할것만 등록
        staff:Array
    }
}
</script>

<style>

</style>