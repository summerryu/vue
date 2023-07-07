<template>
    <router-view>
        <div id="container">
        <div class="center">
            <div class="main">
                <p>Moot The Crew</p>
                <h2>Our Talented Staff</h2>
            </div>
            <div class="lists">
                <div class="boxs" v-for="(staff,i) in stafflist" :key="i">
                        <img :src="staff.imgs">
                        <h3>{{ staff.no }}</h3>
                        <p>{{ staff.jop }}</p>
                        <h4>{{ staff.context }}</h4>
                        <button><router-link :to="'/staff/'+i">MORE</router-link></button>
                </div>
            </div>
        </div>
    </div>
    </router-view>
    
</template>

<script>
export default {
    name:"MainContainer",
    data(){
        return{
            stafflist:[
                {
                    imgs:require("../assets/doctor01.jpg"),
                    no:"DR. DONALD TOMASH",
                    jop:"Pediatrist",
                    context:"Cum soclis natoque penatibus et magnls dis parturlent montesmus"
                },
                {
                    imgs:require("../assets/doctor02.jpg"),
                    no:"DR. MARIA FRAUM",
                    jop:"Cardologist",
                    context:"Cum soclis natoque penatibus et magnls dis parturlent montesmus"
                },
                {
                    imgs:require("../assets/doctor03.jpg"),
                    no:"DR. EVA MORATI",
                    jop:"Rehabilltation Therapy",
                    context:"Cum soclis natoque penatibus et magnls dis parturlent montesmus"
                },
            ]
        }
    }
}
</script>

<style lang="scss">
#container{
    display: flex;
    justify-content: center;
    background-color: rgb(248, 252, 255);
    padding:100px;
    .center{
        display: flex;
        justify-content: center;
        width:1200px;
        flex-wrap: wrap;
        .main{
            display: 800px;
            text-align: center;
            padding:20px;
            margin-bottom: 30px;
            p{
                color:rgb(37, 117, 146);
                font-weight: bold;
                font-size: 15px;
                padding-bottom: 5px;
            }
        }
        .lists{
            width:1170px;
            display: flex;
            justify-content: space-between;
            .boxs{
                width:360px;
                background-color: #fff;
                text-align: center;
                img{
                    width:100%;
                }
                h3{
                     font-size: 15px;
                     margin: 20px 0;
                }
                p{
                    font-size: 13px;
                    color:#575757;
                }
                h4{
                    font-size: 14px;
                    font-weight: normal;
                    margin: 10px 0;
                }
                button{
                    width: 100px;
                    background-color: #000;
                    border: none;
                    padding:5px;
                    margin-bottom: 10px;
                    a{
                        color:#fff;
                    }
                }
            }
        }
    }
}
</style>