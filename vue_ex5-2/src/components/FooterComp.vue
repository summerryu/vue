<template>
  <div id="footer">
    <div class="center">
        <div class="bot">
            <h2>DISCLAIMER</h2>
            <P>All Softwares and Themes are Developed by bdtask lt is the<br>
                 Complete own properties of bdtask.Nobody is allowed to<br>
                 copy our softwares and re-sale without our permission
                </P>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"FooterComp"
}
</script>

<style lang="scss">
#footer{
        display: flex;
        justify-content: center;
        position: fixed;
        bottom:0;
        left: 50%;
        width: 100%;
        transform: translateX(-50%);
        background-color:#2b2b2b;
    .center{
        display: flex;
        justify-content: center;
        text-align: center;
        height: 150px;
        align-items: center;
        h2{
            color:#fff;
            font-size: 16px;
            margin-bottom: 20px;
        }
        p{
            color:#6d6d6d;
            font-size: 13px;
        }
    }
}
</style>