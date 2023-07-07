<template>
  <div class="wrap">
    <div class="view" :style="{marginLeft:-100 * sNumber + '%'}">
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
        <div>slide 4</div>
    </div>
    <ul class="circle">
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
    </ul>
    <button class="prev" @click="sNumber === 0 ? sNumber = 3 : sNumber">이전</button>
    <button class="next" @click="sNumber === 3 ? sNumber = 0 : sNumber">이후</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .wrap{
        width:700px;
        margin:0 auto;
        overflow: hidden;
        .view{
            width:400%;
            display: flex;
            transition: all 0.5s;
            > div{
                width:25%;
                height: 400px;
                &:nth-child(1){
                    background-color: darkcyan
                }
                &:nth-child(2){
                    background-color: darksalmon;
                }
                &:nth-child(3){
                    background-color: darkorchid;
                }
                &:nth-child(4){
                    background-color: darkred;
                }
            }
        }
        .circle{
            >li{
                >a{
                    color:#000;
                }
            }
            >li.on{
                >a{
                    color:red;
                }
            }
        }
    }
</style>