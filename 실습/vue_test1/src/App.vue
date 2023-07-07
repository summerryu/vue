<template>
  <div id="container">
    <div class="center">
      <div class="top">
        <h1>FROM THE BLOG</h1>
        <p>BLOGGING IS FUN</p>
      </div>
      <div class="tap">
        <ul :class="menuindex === i ? 'menu show' : 'menu'" @click.prevent="menuindex=i">
          <li :class="menuindex === i ? 'show' : ''" v-for="(menus,i) in lists" :key="i" @click.prevent="menuindex=i">
            <a href="#">{{ lists[i].title }}</a>
          </li>
        </ul>
        <div class="list">
          <img :src="lists[menuindex].imgs">
          <h2>{{ lists[menuindex].main }}</h2>
          <p>{{ lists[menuindex].since }}</p>
          <h4>{{ lists[menuindex].text }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
    data(){
      return{
        menuindex:0,
        lists:[
          {
            title:"GALLERY",
            imgs:require("./assets/1.jpg"),
            main:"GALLERY: THE NAMES OF THE SLAVE",
            since:"MAY 18, 2016",
            text:"Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs…"
          },
          {
            title:"TREND",
            imgs:require("./assets/2.jpeg"),
            main:"SPLINTERED CRYING",
            since:"MAY 3, 2016",
            text:"So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man…"
          },
          {
            title:"HOST",
            imgs:require("./assets/3.jpg"),
            main:"SILK OF DREAMER",
            since:"APRIL 7, 2016",
            text:"To they four in love. Settling you has separate supplied bed. Concluded resembled suspected his resources curiosity joy. Led all…"
          }],
      }
    }
}
</script>

<style lang="scss">
* { margin:0; padding:0; }
a { text-decoration: none; }
ul,li { list-style: none; }
h1,h2,h3,h4,h5{ font-size: 100%; }
#container{
  display: flex;
  justify-content: center;
  .center{
    display: flex;
    justify-content: center;
    width:100%;
    flex-wrap: wrap;
    align-items: center;
    .top{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width:1200px;
      align-items: center;
      margin:50px 0;
    }
    .tap{
      display: flex;
      justify-content: center;
      width:1000px;
      flex-wrap: wrap;
      .menu{
        display: flex;
        width:800px;
        justify-content: space-between;
        background-color: pink;
        text-align: center;
        li{
          width:300px;
          border-left: 1px solid #fff;
          padding:20px;
          a{
            color:#fff;
            font-weight: bold;
            
          }
          &:nth-child(1){
            border:none
          }
        }
        li.show{
          background-color: skyblue;
          a{
            color:#000;
          }
        }
      }
      .list{
        flex-direction: column;
        margin-top:50px;
        display:flex;
        border: 2px solid pink;
        width:300px;
        flex-wrap: wrap;
        padding:20px;
        img{
          width:100%
        }
        h2{
          font-size:15px;
          margin: 30px 0px;
        }
        p{
          font-size:13px;
          color:gray;
        }
        h4{
          font-size:14px;
          color:gray;
          font-weight: normal;
        }
      }
    }
  }
}
</style>
