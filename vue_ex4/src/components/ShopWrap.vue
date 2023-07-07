<template>
  <div class="shopCenter">
    <!-- 왼쪽컴포넌트 -->
    <shop-left :leftData ="leftData" :change="change"></shop-left>
    <!-- 오른쪽컴포넌트 -->
    <shop-right :rightData = "rightData"/>
</div>
</template>

<script>
import ShopLeftVue from './ShopLeft.vue'
import ShopRightVue from './ShopRight.vue'


export default {
    name:"ShopWrap",
    components:{
        ShopLeft:ShopLeftVue,
        ShopRight:ShopRightVue
    },
    data(){
        // 부모 컴포넌트에서 전달한 데이터값[props]는 자식컴포넌트에서 수정할 수 없음
        return{
            change:false,

            // 왼쪽 박스 데이터값 세팅
            leftData:{
                catagory:"여행 카테고리",
                title:"왼쪽박스 제목",
                uploadData:"2023-05-08",
                imgs:require("../assets/list01.jpg")
            },
            // 오른쪽 박스 데이터값 세팅 
            rightData:[
                {
                    imgs:require("../assets/list02.jpg"),
                    title:"오른쪽 박스제목1"
                },
                {
                    imgs:require("../assets/list03.jpg"),
                    title:"오른쪽 박스제목2"
                },
                {
                    imgs:require("../assets/list04.jpg"),
                    title:"오른쪽 박스제목3"
                },
                {
                    imgs:require("../assets/list05.jpg"),
                    title:"오른쪽 박스제목4"
                }
            ]
        }
    }
}
</script>

<style>
    .shopCenter{
        display: flex;
        justify-content: center;
    }
</style>