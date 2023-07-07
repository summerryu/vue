<template>
  <div class="doctor">
    <h2>{{ doctor[$route.params.id].name }}</h2>
    <p>{{ doctor[$route.params.id].introduce }}</p>
  </div>

  <div>
    <router-link to="/">메인으로</router-link>
  </div>
</template>

<script>
export default {
    name:"DoctorComp",
    props:{
        doctor:Array
    }
}
</script>

<style>

</style>