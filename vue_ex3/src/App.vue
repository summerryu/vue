<template>
    <!-- <div :class="['box',toggle ===true ? 'on' : '']">클래스 제어</div>
      클래스 미리 지정해놓을때는 배열안에 첫번째 값으로 지정
      두번째 값에는 자바스크립트 조건문이 삽입


    -->
    <!-- <button class="btn1" @click="toggle = !toggle">클래스 추가/제거</button>

    <div :style="{width:200 * index + 'px'}">스타일 속성 제어</div> -->
    <SlideView />
</template>

<script>

import SlideView from "./components/SlideView.vue"
export default {
  name: 'App',
  components: {
    SlideView:SlideView
  },
  data(){
    return{
      // toggle:true,  // state
      // index:0
    }
  }
}
</script>

<style>
  * { margin:0; padding:0; }
  /* .box{
    width:300px;
    height: 300px;
    background-color: pink;
  }
  .box.on{
    background-color: green;
    border: 1px solid red;
  } */
  /* div{
    width:300px;
    height: 300px;
    background-color: pink;
  }
  div.on{
    background-color: green;
    border: 1px solid red;
  } */
</style>
