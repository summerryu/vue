<template>
  <HeaderComp />
  <router-view :lists="listsData"></router-view>
  <div>
    <router-link :to="'/doctor/'+i"></router-link>
  </div>
  <FooterComp />
</template>

<script>
import HeaderCompVue from './components/HeaderComp.vue'
import FooterCompVue from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp:HeaderCompVue,
    FooterComp:FooterCompVue,
  },
  data(){
    return{
      listsData:[
                {   
                    imgs:require("./assets/1.jpg"),
                    name:"Marc Parcival",
                    text:"Newyork"
                },
                {
                    imgs:require("./assets/2.jpg"),
                    name:"Marc Parcival",
                    text:"Newyork"
                },
                {
                    imgs:require("./assets/3.jpg"),
                    name:"Marc Parcival",
                    text:"Newyork"
                },
                {
                    imgs:require("./assets/4.jpg"),
                    name:"Marc Parcival",
                    text:"Newyork"
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
img { vertical-align: center; }
</style>
