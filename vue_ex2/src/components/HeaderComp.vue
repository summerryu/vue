<template>
    <div id="header">
        <div class="center">
            <h1 class="logo"><a href="#"><img src="../assets/logo.png"></a></h1>
            <ul class="gnb">
                <li v-for="(menus,i) in 5" :key="i"><a href="#">메뉴 텍스트{{ i+1 }}</a></li>
            </ul>
        </div>
    </div>
    
</template>
<script>
// export default 현재 작업파일(컴포넌트.vue)을 다른 컴포넌트에서 불러들여서 사용할 수 있는 출력구문
// 해당 vue파일을 export 시킨다 Name 값 설정
// 해당 컴포넌트 파일을 불러들일 vue 파일로 가서 import로 불러들인다.
export default {
   name:'HeaderComp'
}
</script>
<style>
    #header{ background-color: pink; display: flex; justify-content: center; }
    #header .center{ width:1200px; display: flex; justify-content: space-between; align-items: center; }
    #header .center .logo img{ width:100px; }
    #header .center .gnb { display: flex; }
    #header .center .gnb > li { margin: 0 15px; }
    #header .center .gnb > li > a { color:#fff; }
    #header .center .gnb > li:hover > a { color:#000; }
</style>
