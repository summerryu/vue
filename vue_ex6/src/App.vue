<template>
  
  <div id="container">
    <!-- props 문법은 데이터를 자식 컴포넌트한테 전달할 때 
        무조건 사용 가능한게 아니고 ,
        해당 데이터를 사용하겠습니다 -> props 사용해서 해당 데이터를 등록 해야함
        
    -->
    <router-view :staff="staffData" :doctor="doctorData"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      staffData:[
        {
          name:"최씨",introduce:"1빠"
        },
        {
          name:"김씨",introduce:"2빠"
        },
        {
          name:"이씨",introduce:"3빠"
        }],
      doctorData:[
        {
          name:"오씨",introduce:"의사1"
        },
        {
          name:"우씨",introduce:"의사1"
        },
        {
          name:"양씨",introduce:"의사2"
        },
        {
          name:"하씨",introduce:"의사4"
        }]

    }
  }    
}
</script>

<style>

</style>
