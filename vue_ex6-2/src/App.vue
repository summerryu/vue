<template>
  <div id="container">
    <router-view :game="gameData"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      gameData:[
        {
          imgs:require("./assets/list1.jpg"),
          name:"넥슨게임즈",
          day:"20220.07.05",
          title:"'흥행 제조기' 넥슨게임즈, 스타 개발자 '한가득'",
          introduce:"올해 3월 출범한 넥슨 게임즈가 첫게임 '히트2' 출시를 예고하며 본격적인 경쟁 대열에 합류한다"
        },
        {
          imgs:require("./assets/list2.jpg"),
          name:"HIT2",
          day:"20220.07.05",
          title:"넥슨 '히트2' 론칭 전부터 기대감 고조",
          introduce:"넥슨게임즈의 첫 시작으로 꼽히는 '히트2'가 출시 전부터 작품의 매력을 내세워 기대감을 더하고 있다."
        },
        {
          imgs:require("./assets/list3.jpg"),
          name:"넥슨게임즈",
          day:"20220.06.28",
          title:"박용현 넥슨게임즈 대표에 힘 싣는 넥슨",
          introduce:"넥슨이 박용현 대표가 이끄는 개발자회사 넥슨게임즈에 힘을 싣고 글로벌 시장 공략에 나선다"
        }
      ]
    }
    
  }
}
</script>

<style>
* { margin:0; padding:0; }
a{ text-decoration: none; color:#000; }

#container{
  display: flex;
  justify-content: center;
}
</style>
