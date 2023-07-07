<template>
  <div id="subcont">
    <div class="subbg">
        <div class="subheader">
            <div class="texts">
                <p><router-link to="/">HOME</router-link></p>
                <h2>(주)제이엠신용정보</h2>
                <h2>CEO인사말</h2>
            </div>
        </div>
    </div>
    <div class="subcont2">
        <div class="submain">
            <div class="list">
                <h1>(주)제이엠신용정보</h1>
                <ul class="menus">
                    <li class="on">CEO인사말</li>
                    <li>조직도</li>
                    <li>비전</li>
                    <li>사업영역</li>
                    <li>최근소식</li>
                    <li>찾아오시는길</li>
                </ul>
            </div>
            <div class="ceo">
                <h1>CEO인사말</h1>
                <h2>여러분 안녕하십니까?
                    <span><br>"생동감과 정이 넘치는 행복한 회사"<br>
                            (주)제이엠신용정보를 방문해주셔서 감사합니다.
                    </span>
                </h2>
                <p>당사의 임직원은 신용정보업의 각 분야별로 최상의 지식과 경력, 역량을 갖춘 인재들로서 
                    개인과 기업, 국가 경제의 핵심인 금융의 흐름을 원활히 하는 역할과 더불어 행복한 사회를 
                    만들어 가는데 기여하고 있습니다.
                    <br>또한 기업의 비재무적 요소인 
                    E.S.G - 환경(Environment), 사회(Social), 지배구조(Governance)의 중요성이 부각되면서 
                    당사도 전 임직원의 철저한 준법정신과 사회적, 윤리적 책임의 자세로 선진 신용사회 
                    구현의 일익을 담당하고자 최선을 다하고 있습니다.
                </p>
            </div>
            <div class="ceoimg">
                <img src="../assets/sub0101_img.jpg">
                <p>(주)제이엠신용정보 대표이사
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"SubPageComp"
}
</script>

<style lang="scss">
#subcont{
    width:100%;
    .subbg{
        height: 250px;
        background-image: url("../assets/sub_visual.jpg");
        position: relative;
        display: flex;
        justify-content: center;
        .subheader{
            color:#fff;
            width:100%;
            position: absolute;
            bottom:0;
            background-color: rgba(24, 64, 124, 0.7);
            display: flex;
            justify-content: center;
            .texts{
                display: flex;
                width:1200px;
                height: 30px;
                line-height: 30px;
                padding:7px;
                p{
                    padding:0 10px;
                    border-right: 1px solid #fff;
                    border-left: 1px solid #fff;
                    a{
                        color:#fff;
                        font-weight: bold;
                    }
                }
                h2{
                    font-weight: normal;
                    margin-left: 20px;
                    width:200px;
                    border-right: 1px solid #fff;
                }
            }
        }
    }
    .subcont2{
        margin-top:50px;
        display: flex;
        justify-content: center;
        .submain{
            position: relative;
            width:1200px;
            display:flex;
            .list{
                margin-right:30px;
                width: 250px;
                height: 700px;
                h1{
                    width:100%;
                    height: 160px;
                    line-height: 160px;
                    font-size: 25px;
                    color:#fff;
                    background-color: #4c78b9;
                }
                .menus{
                    li{
                        font-size: 15px;
                        padding:20px 0px;
                        border-bottom: 1px solid rgb(199, 199, 199);
                        color:rgb(129, 129, 129);
                        }
                        li.on{
                            background-color: #90a9cf;
                            width:100%;
                            color:#fff;
                        }
                }
            }
            .ceo{
                width:800px;
                h1{
                    font-size: 30px;
                    font-weight: normal;
                    padding:30px 0;
                    border-bottom: 1px solid gray;
                   
                }
                h2{
                    margin-top: 30px;
                    font-size: 25px;
                    font-weight: normal;
                    span{
                        color:#4c78b9;
                        font-weight: bold;
                        line-height: 40px;
                    }
                }
                p{
                    font-size:15px;
                    margin-top:30px;
                    width:500px;
                    line-height: 30px;
                    color:gray;
                }
            }
            .ceoimg{
                position: absolute;
                top:270px;
                right:130px;
                p{
                    font-size: 15px;
                }
            }
        }
    }
}
</style>