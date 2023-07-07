<template>
  <div id="header">
    <h1><a href="#"><img src="../assets/logo.png"></a></h1>
    <ul>
        <li><router-link to="/intro">인트로페이지</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"HeaderComp"
}
</script>

<style>
    #header{ border:1px solid red; }
</style>