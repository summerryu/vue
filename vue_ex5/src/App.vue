<template>
  <!-- 라우터 경로에 따른 컴포넌트 교체 보여주세요 -->
  <HeaderComp />
  <!-- 웹툰데이터 디테일 컴포넌트에 전달
        [사용하려면 해당 컴포넌트 파일에서 props 사용해야 가능]
  -->
  <router-view :webtoon="webtoonData"></router-view>

  <ul>
    <li v-for="(detail,i) in webtoonData" :key="i"><router-link :to="'/detail/'+i">{{detail.title}}</router-link></li>
    <!-- <li><router-link to="/detail/0">상세페이지1</router-link></li>
    <li><router-link to="/detail/1">상세페이지2</router-link></li>
    <li><router-link to="/detail/2">상세페이지3</router-link></li>
    <li><router-link to="/detail/3">상세페이지4</router-link></li> -->
  </ul>
  <FooterComp />
</template>

<script>
import FooterCompVue from './components/FooterComp.vue'
import HeaderCompVue from './components/HeaderComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp:HeaderCompVue,
    FooterComp:FooterCompVue
  },
  data(){
    return{
      webtoonData:[
        {
          title:"삼국지톡",
          context:"삼국지톡 내용",
          imgs:require("./assets/1.jpg")
        },
        {
          title:"김부장",
          context:"김부장 내용",
          imgs:require("./assets/2.jpg")
        },
        {
          title:"연애혁명",
          context:"연애혁명 내용",
          imgs:require("./assets/3.jpg")
        },
        {
          title:"외모지상주의",
          context:"외모지상주의 내용",
          imgs:require("./assets/4.jpg")
        },
        {
          title:"웹툰",
          context:"웹툰내용",
          imgs:require("./assets/1.jpg")
        }
      ]
    }
  }
}
</script>

<style>
* { margin:0; padding:0; }
a { text-decoration: none; }
ul,li { list-style: none; }
</style>
