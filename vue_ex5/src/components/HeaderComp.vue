<template>
  <div id="header">
    <div class="center">
        <div class="gnb">
            <h1><a href="#"><router-link to="/"></router-link>LOGO</a></h1>
            <ul class="menu">
                <li><router-link to="/"><a href="#">main</a></router-link></li>
                <li><router-link to="/sub"><a href="#">sub</a></router-link></li>
                <li><router-link to="/sub/lunch"><a href="#">lunch</a></router-link></li>
                <li><router-link to="/sub/dinner"><a href="#">dinner</a></router-link></li>
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
        .center{
            display: flex;
            justify-content: center;
            width:100%;
            height: 100px;
            line-height: 100px;
            background-color: pink;
            .gnb{
                width:1200px;
                display: flex;
                justify-content: space-between;
                >h1{
                    a{
                        color:#000;
                        transition: all 1s;
                        &:hover{
                            color:#fff;
                            text-decoration: underline;
                        }
                    }
                }
                .menu{
                    display: flex;
                    li{
                        margin-left: 30px;
                        a{
                            color:#fff;
                            transition: all 1s;
                            &:hover{
                                color:#000;
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
    }
</style>