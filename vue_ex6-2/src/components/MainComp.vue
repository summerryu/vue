<template>
 <div class="main">
    <div class="nexon" v-for="(nexon,i) in game" :key="i">
        <div class="sub">
            <router-link :to="'/sub/'+i">
                <img :src="nexon.imgs">
                <h4>{{ nexon.name }}</h4>
                <span>{{ nexon.day }}</span>
                <h2>{{ nexon.title }}</h2>
                <p>{{ nexon.introduce }}</p>
            </router-link>
        </div>
    </div>
 </div>
</template>

<script>
export default {
    name:"MainComp",
    props:{
        game:Array
    }
}
</script>

<style lang="scss">
.main{
    margin-top: 200px;
    width:1200px;
    display: flex;
    justify-content: space-between;
    background: pink;
    .nexon{
        width: 300px;
        background-color: #fff;
        margin:50px 50px;
        img{
            width:100%;
        }
    }
}
</style>