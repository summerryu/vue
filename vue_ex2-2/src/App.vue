<template>
  <div id="container">
    <div class="viewlist" v-if="listview === true">
        <span class="viewNum">{{ listData[listindex].Number }}</span>
        <img class="viewImg" :src="listData[listindex].imgs">
        <h2 class="viewTitle">{{ listData[listindex].title }}</h2>
        <p class="viewPrice">{{ listData[listindex].price }}</p>
        <a href="#" class="close" @click="listview = false">Close</a>
    </div>
    <div class="center">
        <ul class="list" v-for="(listData,i) in listData" :key="i">
          <li class="Num">
            <a href="#">{{ listData.Number }}</a>
          </li>
            <img :src="listData.imgs">
          <li>
            <a href="#">
              <h2>{{ listData.title }}</h2>
            </a>
          </li>
            <li>
              <a href="#">
                <p>{{ listData.price }}</p>
              </a>
            </li>
            <li class="open" @click="listview = !listview; listindex = i"><a href="#">
              {{ listData.view }}
            </a>
          </li>
        </ul>
      </div>
    
    </div>
    
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      listview:false,
      listindex:0,
      listData:[
        {
          Number:1,
          imgs:require("./assets/flower1.jpg"),
          title: "Flower No.1",
          price:"none",
          view:"viewmore"
        },
        {
          Number:2,
          imgs:require("./assets/flower2.jpg"),
          title: "Flower No.2",
          price:"none",
          view:"viewmore"
        },
        {
          Number:3,
          imgs:require("./assets/flower3.jpg"),
          title: "Flower No.3",
          price:"none",
          view:"viewmore"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
* { margin:0; padding:0; }
a { text-decoration: none; }
ul,li,ol { list-style: none; }

  #container{
    display: flex;
      justify-content: center;
      width: 100%;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      z-index: 95;
    .center{
        width:1200px;
        display: flex;
        justify-content: space-between;
        text-align: center;
      .list{
        width:350px;
        border: 1px solid #c08787;
        padding:20px;
        position: relative;
        .Num{
          position: absolute;
          top:10px;
          right:10px;
          a{
            display: block;
            width: 15px;
            height: 15px;
            background-color: #ffbebe;
            padding:10px;
            border-radius: 50%;
            font-weight: bold;
            line-height: 15px;
            border: 2px dashed #000;
          }
        }
        img{
          width:100%;
        }
        li{
          a{
            
            color:#000;
          }
        }
        .open{
          width: 100px;
          height: 30px;
          line-height: 30px;
          background-color: gray;
          text-align: center;
          margin-top: 30px;
          border-radius: 5px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
            a{
              color:#fff;
            }
        }
      }      
    }
    .viewlist{
        text-align: center;
        width:350px;
        position: fixed;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        z-index: 98;
        width:350px;
        border: 1px solid #707070;
        padding:25px;
        background-color: #ffbebe;
        img{
          width:100%;
        }
       .close{
          display: block;
          width: 100px;
          height: 30px;
          line-height: 30px;
          background-color: gray;
          text-align: center;
          margin-top: 30px;
          border-radius: 5px;
          color:#fff;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
       }
       .viewNum{
            position: absolute;
            top:10px;
            right:10px;
            display: block;
            width: 15px;
            height: 15px;
            background-color: #fff;
            padding:10px;
            border-radius: 50%;
            font-weight: bold;
            line-height: 15px;
            border: 2px dashed #000;
       }
    }
  }
</style>
