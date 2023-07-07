<template>
  <div id="container">
    <div class="center">
        <h2>subCotainer view</h2>
    </div>
  </div>
</template>

<script>
export default {
    name:"SubContainer",
}
</script>

<style lang="scss">
   #container{
    display: flex;
    justify-content: center;
    margin-top: 100px;
    .center{
        display: flex;
        justify-content: center;
        width:600px;
        height: 600px;
        background-color: pink;
        align-items: center;
    }
   }
</style>