<template>
  <div id="footer">
    <div class="center">
        <div class="list">
            <div class="boxs" v-for="(box,i) in listData" :key="i">
                <p>{{ box.text }}</p>
                <span><img :src="box.imgs"></span>
            </div>
        </div>
        <div class="listbot">
            <div class="bottext">
                <p>서울시 서초구 방배로56 (방배동, 위너스마당) (주)제이엠 신용정보<span>대표전화 :02-6219-1183</span>
                    이메일:jmpnc@jmcinfo.com
                </p>
                <p>Copyright by(주)제이엠신용정보 All Rights Reserved</p>
            </div>
            <img src="../assets/footer_logo.jpg">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"FooterComp",
    data(){
        return{
            listData:[
                {
                    text:"개인정보처리방침",
                    imgs:require("../assets/footer_off.png")
                },
                {
                    text:"신용정보 활용체제의 공식",
                    imgs:require("../assets/footer_off.png")
                },
                {
                    text:"채권추심업무 처리절차",
                    imgs:require("../assets/footer_off.png")
                },
                {
                    text:"소멸시효 완성채권 추심",
                    imgs:require("../assets/footer_off.png")
                },
                {
                    text:"영상정보처리",
                    imgs:require("../assets/footer_off.png")
                },
                {
                    text:"사실 통보 공시",
                    imgs:require("../assets/footer_off.png")
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    #footer{
        border-top:1px solid skyblue ;
        margin-top: 50px;
        .center{
            margin-top: 50px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .list{
                width:1400px;
                display: flex;
                justify-content: space-between;
                .boxs{
                    height: 50px;
                    line-height: 50px;
                    width:200px;
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid gray;
                    position: relative;
                    padding: 10px;
                    span{
                        img{
                            position: absolute;
                            top:50%;
                            transform: translateY(-50%);
                            right:5px;
                        }
                    }
                }
            }
            .listbot{
                display: flex;
                justify-content: space-between;
                width:1400px;
                margin:50px 0;
            }
        }
    }
</style>