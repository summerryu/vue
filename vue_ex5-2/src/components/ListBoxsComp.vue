<template>
    <div class="detail">
        <div class="lists" v-for="(lists,i) in listsData" :key="i">
            <router-link :to="'/doctor/'+i">
                <img :src="lists.imgs">
                <h2>{{ lists.name }}</h2>
                <p>{{ lists.text}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"ListBoxsComp",
    data(){
        return{
            listsData:[
                {   
                    imgs:require("../assets/1.jpg"),
                    name:"Marc Parcival",
                    text:"Newyork"
                },
                {
                    imgs:require("../assets/2.jpg"),
                    name:"Marc Parcival",
                    text:"Newyork"
                },
                {
                    imgs:require("../assets/3.jpg"),
                    name:"Marc Parcival",
                    text:"Newyork"
                },
                {
                    imgs:require("../assets/4.jpg"),
                    name:"Marc Parcival",
                    text:"Newyork"
                }
          ]
        }
    }
}
</script>

<style lang="scss">
.detail{
    display: flex;
    justify-content: space-between;
    width:1000px;
    position: absolute;
    left:50%;
    height:600px;
    transform: translateX(-50%);
    .lists{
        width:200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 20px 0;
        border: 1px solid skyblue;
        padding:10px;
        img{
            width:100%;
        }
        h2{
            color:skyblue;
        }
        p{
            color:#000;
        }
    }
}
</style>