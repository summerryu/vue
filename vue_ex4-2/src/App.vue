<template>
  <WorkTest :work04="work04" />
</template>

<script>
import WorkTestVue from './components/WorkTest.vue'

export default {
  name: 'App',
  components: {
    WorkTest:WorkTestVue
  },
  data(){
    return{
      work04:[
        {
          imgs:require("./assets/list01.jpg"),
          title:"Claritas Etiam Processus",
          text:"Photography,Nature"
        },
        {
          imgs:require("./assets/list02.jpg"),
          title:"Quam Nutamus Farum",
          text:"Graphic Design, Mock-up"
        },
        {
          imgs:require("./assets/list03.jpg"),
          title:"Usus Legentis Videntur",
          text:"Photography, Holiday"
        },
        {
          imgs:require("./assets/list04.jpg"),
          title:"Claritas Etiam Processus",
          text:"Photography,Nature"
        },
        {
          imgs:require("./assets/list05.jpg"),
          title:"Quam Nutamus Farum",
          text:"Graphic Design, Mock-up"
        },
        {
          imgs:require("./assets/list06.jpg"),
          title:"Usus Legentis Videntur",
          text:"Photography, Holiday"
        }
      ]
    }
  }
}
/*

  실습 데이터 
  work04:[{}] x 6
*/
</script>

<style>


</style>
