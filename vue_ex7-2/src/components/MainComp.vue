<template>
<div class="bg">
    <div class="cont1">
            <div class="boxs" v-for="(box,i) in boxData" :key="i">
            <img :src="box.imgs">
            <h3>{{ box.text }}</h3>
        </div>
    </div>
</div>
    <div class="cont2">
        <div class="list">
            <div class="box">
                <h2>NEWS<span>MORE+</span></h2>
                <p>[채용공고] 2019년도 상반기(주)JM신용</p>
                <p>(주)엑스펀트펀드 업무협약 체결</p>
                <p>[축] 광주지점 개설</p>
            </div>
            <div class="boxtwo">
                <h2>COMPANY</h2>
                <p>(주)제이엠신용정보는 전문성을 갖춘 우수한 인력<br>
                    과 최첨단 시스템으로 차별화된 서비스 제공 및 <br>
                    건전한 신용사회 정착을 위해 노력하겠습니다
                </p>
                <button>MORE VIEW</button>
            </div>
            <div class="boxtwo">
                <h2>RECRUIT</h2>
                <p>인재상 / 인재개발<br>
                    직원만족 /<br>
                    채용 공고 및 입사지원
                </p>
                <button>MORE VIEW</button>
            </div>
        </div>
    </div>
    <div class="cont3">
        <div class="center">
            <h2>관련사이트</h2>
            <div class="banners">
                <img src="../assets/list01.jpg">
                <img src="../assets/list02.jpg">
                <img src="../assets/list03.jpg">
                <img src="../assets/list04.jpg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"MainComp",
    data(){
        return{
            boxData:[
                {
                    imgs:require("../assets/quick01.png"),
                    text:"고객의 소리"
                },
                {
                    imgs:require("../assets/quick02.png"),
                    text:"민원상담"
                },
                {
                    imgs:require("../assets/quick03.png"),
                    text:"FAQ"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .bg{
        width: 100%;
        height: 500px;
        background-image: url("../assets/banner.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        position: relative;
        .cont1{
            display: flex;
            justify-content: space-around;
            text-align: center;
            flex-direction: column;
            position: absolute;
            top:0;
            right:400px;
            background-color: rgba(71, 130, 207, 0.5);
            width:180px;
            height: 100%;
            color:#fff;
            .boxs{
                position: relative;
                h3{
                    margin-top: 10px;
                }
                &:nth-child(2){
                    &::after{
                    content:"";
                    position: absolute;
                    bottom: -30px;
                    width:70%;
                    height: 1px;
                    background-color: #fff;
                    display: block;
                    left: 50%;
                    transform: translateX(-50%);
                    }
                    &::before{
                        content:"";
                        position: absolute;
                        top: -30px;
                        width:70%;
                        height: 1px;
                        background-color: #fff;
                        display: block;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
            }
        }
    }
    .cont2{
        margin-top:20px;
        margin-bottom: 50px;
        width:100%;
        display: flex;
        justify-content: center;
        .list{
            width:1200px;
            display: flex;
            height: 350px;
            border: 1px solid gray;
            .box{
                width: 33.333333%;
                margin: 10px;
                 h2{
                    margin:20px;
                    font-size: 25px;
                    position: relative;
                    margin-bottom: 15px;
                 }
                 span{
                    font-size: 13px;
                    color:gray;
                    position: absolute;
                    top:0;
                    right:20px;
                 }
                 p{
                    margin-bottom: 10px;
                    height:100px;
                    margin: 10px;
                    &:nth-child(3){
                        position: relative;
                        &::after{
                            position: absolute;
                            content:"";
                            display: block;
                            width:100%;
                            height: 1px;
                            background: gray;
                            bottom: 30px;
                        }
                        &::before{
                            content:"";
                            display: block;
                            width:100%;
                            height: 1px;
                            background: gray;
                            position: absolute;
                            top:-30px;
                        }
                    }
                 }
            }
            .boxtwo{
                width: 33.333333%;
                background-image: url("../assets/company.jpg");
                background-size: cover;
                background-repeat: no-repeat;
                display: flex;
                flex-direction: column;
                h2{
                    color:#fff;
                    margin: 20px;
                    font-size: 25px;
                    margin-bottom: 15px;
                 }
                 p{
                    margin: 20px;
                    line-height: 30px;
                    color:#fff;
                 }
                 button{
                    width:200px;
                    height: 50px;
                    border: 1px solid #fff;
                    margin: 20px;
                    color:#fff;
                    background-color: transparent;
                 }
                &:nth-child(3){
                    background-image: url("../assets/recruit.jpg");
                    background-size: cover;
                    background-repeat: no-repeat;
                }
            }
            
        }
    }
    .cont3{
        display: flex;
        justify-content: center;
        width:100%;
        .center{
            display: flex;
            justify-content: center;
            width:1200px;
            border: 1px solid #000;
            padding:20px;
            flex-wrap: wrap;
            h2{
                font-size: 20px;
                width:1200px;
            }
            .banners{
                width:856px;
                display: flex;
                justify-content: center;
                border: 1px solid #000;

            }
        }
    }
</style>