<template>
<div id="header">
  <div class="center">
    <h1>로고</h1>
    <ul class="gnb">
      <li><a href="#">메뉴1</a></li>
      <li><a href="#">메뉴2</a></li>
      <li><a href="#">메뉴3</a></li>
      <li><a href="#">메뉴4</a></li>
    </ul>
  </div>
</div>
<div id="container">
  <MainSliderVue />
</div>
  <!--

    vue에서의 생명주기 [ lifecycle ] 개념

    mounted < 탑재하다, 반영시키다

  -->
</template>

<script>

import MainSliderVue from './components/MainSlide.vue';

export default {
  name: 'App',
  components: {
    MainSliderVue:MainSliderVue
  },
  mounted(){
    // 바닐라 자바스크립트 코드 작성할 수 있는 구간
    // 변수, 상수 선어 후 사용하지않으면 에러

    const header = document.querySelector("#header");

    window.onscroll = function(){
      let scTop = window.scrollY;
      if(scTop > 0){
        header.classList.add("on");
      }
      else{
        header.classList.remove("on");
      }
    }
  }
}
</script>

<style>
  * { margin:0; padding:0; }
  ul,ol,li { list-style: none; }
  a { text-decoration: none; }
  body { line-height: 1; }

  #header{
    height: 100px;
    width:100%; position: fixed; left: 0; top:0;
    background-color: pink; display: flex; justify-content: center;
    line-height: 100px;
  }
  #header.on { background-color: orange; }
  #header .center .gnb > li > a { color:#fff; }
  #header .center{
    width:1000px; display: flex; justify-content: space-between;
  }
  #header .center .gnb { display: flex; }
  #header .center .gnb > li { margin:0 10px; }
  #header .center .gnb > li > a { color:#000; }

  #container { height: 5000px; }
</style>
