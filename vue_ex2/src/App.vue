<template>
  <!-- 해당 컴포넌트가 재사용될 때 데이터값에 따라 다르게 출력하게 만들 수 있음 -->
  <!-- router 라는것을 배우면 웹브라우저 주소창에
        어떤 경로를 입력하느냐에 따라 컴포넌트가 교체되서 보인다.
  -->
  <Header></Header>
  <Popup></Popup>
    <div class="wrap">
        <div class="lists" v-for="(lists,i) in listData" :key="i">
        <span>{{ lists.no }}</span>
        <img :src="lists.img">
        <h2>{{ lists.title }}</h2>
        <p>{{ lists.price }}</p>
        <button @click="ispopup = true; clickindex = i">팝업창</button>
        </div>
    </div>

    <ul class="tabMenu"> <!-- @이벤트명.prevent <- a태그의 페이지 이동 기능을 멈춰줌 -->
      <li :class="tabIndex === i ? 'on' : ''" v-for="(tabmenus,i) in tabData" :key="i" @click.prevent="tabIndex=i"><a href="#">탭메뉴{{ i }}</a></li>
    </ul>
    <div class="tabCont">
      <h2>{{ tabData[tabIndex].title }}</h2>
      <p>{{ tabData[tabIndex].context }}</p>
    </div>
</template>
                    
<script>
// 3. import 구문으로 컴포넌트 파일을 불러줌 import 매개변수이름 from "파일위치경로"
import headertest from "./components/HeaderComp.vue"
import PopupComp from "./components/PopupComp.vue"
// 4. components 구간안에 불러들인 매개변수 이름을 등록시킨다.
// 5. 작명[초록글씨]부분으 해당ㅋ드를 태그처럼 사용할 이름을 지정한다. [사용자 정의태그]
export default {
  name: 'App',
  components:{
    Header:headertest,
    Popup:PopupComp
  },
  data(){
    return{
      tabIndex:0, //탭메뉴 클릭 순번값

      //탭 콘텐츠 div에 출력될 제목과 내용 데이터
      tabData:[
      {title:"탭콘텐츠제목1",context:"탭콘텐츠내용1"},
      {title:"탭콘텐츠제목2",context:"탭콘텐츠내용2"},
      {title:"탭콘텐츠제목3",context:"탭콘텐츠내용3"},
      {title:"탭콘텐츠제목4",context:"탭콘텐츠내용4"}
    ]
    }
  }
}
</script>

<style lang="scss">
  * { margin:0; padding:0; }
  ul,ol,li { list-style: none; }
  a { text-decoration: none; }

  .tabMenu{
    
    li{
      a{
        color:#000;
      }
    }
    li.on{
      a{
        color:red;
      }
    }
  }


  .wrap{
    display: flex;
    justify-content: center;
    .lists{
      width:200px;
      border:1px solid #000;
      margin:0 20px;
      img{
        width:100%;
      }
    }
  }
</style>
