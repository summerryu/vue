<template>
  <div id="header">
    <div class="center">
        <div class="gnb">
            <h1><a href="#"><img src="../assets/medea.png"></a></h1>
            <ul class="menu">
                <li><a href="#">PAGES</a></li>
                <li><a href="#">SHORTCODES</a></li>
                <li><a href="#">GALLERY</a></li>
                <li><a href="#">DEPARTMENTS</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">CONTACT</a></li>
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
    display: flex;
    justify-content: center;
    border-bottom: 1px solid skyblue;
    .center{
        display: flex;
        justify-content: center;
        width:1200px;
        .gnb{
            display: flex;
            justify-content: space-between;
            width:100%;
            height: 100px;
            line-height: 100px;
            h1{
                a{
                    img{
                        width:120px;
                    }
                }
            }
            .menu{
                width: 700px;
                display: flex;
                justify-content: space-between;
                li{
                    a{
                        color:rgb(37, 117, 146);
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>