<template>
  <div id="header">
    <div class="center">
        <div class="gnb">
            <h1><img src="../assets/header_logo.jpg"></h1>
            <ul class="menu">
                <li>
                    <router-link to="/sub">
                        (주)제이엠신용정보
                    </router-link>
                </li>
                <li>고객센터</li>
                <li>채용안내</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"HeaderComp"
}
</script>

<style lang="scss">
#header{
    width:100%;
    display: flex;
    justify-content: center;
    border-bottom:1px solid skyblue ;
    .center{
        display: flex;
        justify-content: center;
        width:1200px;
        height: 100px;
        background-color: #fff;
        line-height: 100px;
        .gnb{
            width:100%;
            display: flex;
            justify-content: space-between;
            position: relative;
            h1{
                img{
                    position: absolute;
                    top:50%;
                    transform: translateY(-50%);
                }
            }
            .menu{
                width:600px;
                display: flex;
                justify-content: space-between;
                li{
                    font-size: 15px;
                }
            }
        }
    }
}
</style>