<template>
   <div class="popup" v-if="ispopup === true">
    <h2>{{ listData[clickindex].title }}</h2>
    <p>{{ listData[clickindex].price }}</p>
    <img :src="listData[clickindex].img">
    <button class="close" @click="ispopup = false">닫기</button>
  </div>

  <div class="wrap">
        <div class="lists" v-for="(lists,i) in listData" :key="i">
        <span>{{ lists.no }}</span>
        <img :src="lists.img">
        <h2>{{ lists.title }}</h2>
        <p>{{ lists.price }}</p>
        <button @click="ispopup = true; clickindex = i">팝업창</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"PopupComp",
    data(){
        return{
            ispopup:false,
            clickindex: 0,
            listData:[{
                no:0,
                title:"상품제목1",
                img:require("../assets/list01.jpg"),
                price:50000
            },
            {
                no:1,
                title:"상품제목1",
                img:require("../assets/list02.jpg"),
                price:20000
            },
            {
                no:2,
                title:"상품제목1",
                img:require("../assets/list03.jpg"),
                price:40000
            },
            {
                no:3,
                title:"상품제목1",
                img:require("../assets/list04.jpg"),
                price:30000
            }]
        }
    }
}
</script>

<style>
* { margin:0; padding:0; }
  .popup{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 300px;
  }
  .wrap{
    display: flex;
    justify-content: center;
    
  }
  .wrap .lists{ width:200px;
                border:1px solid #000;
                margin:0 20px; }
    .wrap .lists img{width:100%;}
</style>