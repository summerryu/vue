<template>
  <div class="project">
    <div class="main">
        <h2>Our Latest Projects.</h2>
        <p>lnvestigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
            etiam processus dynamicus,<br> qui sequitur mutationem consuetudium</p>
    </div>
    <div class="list">
        <div class="boxs" v-for="(boxs,i) in work04" :key="i">
            <img :src="boxs.imgs">
            <h3>{{ boxs.title }}</h3>
            <p>{{ boxs.text }}</p>
        </div>
    <button>LOAD MORE</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"WorkTest",
    props:{
        work04:Object
    }
}
</script>

<style lang="scss">
    .project{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        .main{
            text-align: center;
        }
        .list{
            display:flex;
            justify-content: space-between;
            width:1200px;
            flex-wrap: wrap;
            h3{
                color:darkolivegreen;
            }
            p{
                color:rosybrown;
            }
            .boxs{
                width:350px;
                height: 400px;
                margin:20px 0;
                text-align: center;
                background-color:#fbfaf8;
                transition: all 0.5s;
                img{
                    width:100%;
                }
                &:hover{
                    background-color: #362f2d;
                }
            }
        }
        button{
            border: none;
            background-color:#998675;
            width:170px;
            height: 50px;
            font-size: 12px;
            line-height: 50px;
            font-weight: bold;
            text-align: center;
            color:#fff;
            position: relative;
            left:50%;
            transform: translateX(-50%);
        }
    }
</style>