<template>
  <div id="wrap">
    <!-- 필요한 컴포넌트 삽입 -->
    <!-- props 문법 [데이터전달] 사용방법
        1. 자식 컴포넌트에 속성이름을 작명한다.
    -->
    <ContainerContent :contTitle="title1"/>
    <ContainerContent :contTitle="title2"/>
    <div class="center">
      <!-- <ProductList :prdTest="contexts" :prdArray="prdArray"/> -->
      <!-- <ProductList :prdTest="contexts" :prdArray="prdArray"/> -->
      <ProductList :prdTest="contexts" :prdArray="prdArray[i]" v-for="(test,i) in prdArray" :key="i"/>
      
      <ul>
        <MenuList :menuList="menuList[i]" v-for="(list,i) in menuList" :key="i"/>
      </ul>
    </div>

    <!-- shop 시안 컴포넌트 작업 -->
      <shop-wrap></shop-wrap>
  </div>
</template>

<script>
import ContainerContentVue from './components/ContainerContent.vue'
import MenuListVue from './components/MenuList.vue'
import ProductListVue from './components/ProductList.vue'
import ShopWrapVue from './components/ShopWrap.vue'

export default {
  name: 'App',
  components: {
    ContainerContent:ContainerContentVue,
    ProductList:ProductListVue,
    MenuList:MenuListVue,
    ShopWrap:ShopWrapVue
  },
  data(){
    return{
      title1:"연휴가 끝낫네",
      title2:"날씨 맑음",
      // 객체형식으로 전달하고자할때
      contexts:{
        title:"상품의 제목",
        context:"상품의 내용",
        price:35000
      },
      // 배열의 형식으로 전달하고자할때
      prdArray:[
        {
          no:1,
          auther:"권도현"
        },
        {
          no:2,
          auther:"강아지"
        },
        {
          no:3,
          auther:"고양이"
        }
      ],
      menuList:[
        {
          category:"웹툰",
          title:"월요일 웹툰"
        },
        {
          category:"웹드라마",
          title:"화요일 웹드라마"
        },
        {
          category:"웹툰",
          title:"수요일 웹툰"
        },
        {
          category:"웹툰",
          title:"목요일 웹툰"
        }
      ]
    }
  }
}

</script>

<style>
  .center{
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }
  
</style>
