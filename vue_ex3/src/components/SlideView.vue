<template>
  <div id="container">
    <div class="center">
        <div class="view">
            <div v-for="(btn,i) in 4" :key="i"></div>
        </div>
        <div class="btn">
            <div class="btns" v-for="(btn,i) in btn" :key="i">
                <a href="#" @click.prevent="clickIndex = 0 , onoff = !onoff">{{ btn.title }}</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'SlideView',
    data(){
        return{
            onoff:true,
            clickIndex:0,
            btn:[
                {
                    title:"토목달 300% 누적장학금"
                },
                {
                    title:"토목달스터디클래스"
                },
                {
                    title:"초목달 초등스페셜 윈터클래스"
                },
                {
                    title:"킹목달 새해맞이 이벤트"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    a { text-decoration: none; }
    * { margin:0; padding:0; }

    #container{
        overflow: hidden;
        .center{
            width:2000px;
            overflow: hidden;
            margin: 0 auto;
            .view{
                width:400%;
                display: flex;
                transition: all 0.5s;
                margin-left: 0%;
                > div{
                    width:25%;
                    height: 400px;
                    background-repeat: no-repeat;
                    &:nth-child(1){
                        background-image: url(../assets/slider01.jpg);
                    }
                    &:nth-child(2){
                        background-image: url(../assets/slider02.jpg);
                    }
                    &:nth-child(3){
                        background-image: url(../assets/slider03.jpg);
                    }
                    &:nth-child(4){
                        background-image: url(../assets/slider04.jpg);
                    }
                }
            }
            .btn{
                width:1000px;
                border: 1px black solid;
                height: 50px;
                display: flex;
                justify-content: space-between;
                line-height: 50px;
                text-align: center;
                .btns{
                    width:250px;
                    border-right:1px solid #000 ;
                    a{
                        color:#000;
                    }
                    
                }
                .btns.on{
                    a{
                        background: red;
                    }
                }
                :nth-child(4){
                        border: none;
                    }
            }
        }
    }
</style>