<template>
    <div class="boxs">
        <div class="right">
            <img :src="game[$route.params.id].imgs">
        </div>
        <div class="text">
            <h4>{{ game[$route.params.id].name }}</h4>
            <span>{{ game[$route.params.id].day }}</span>
            <h2>{{ game[$route.params.id].title }}</h2>
            <p>{{ game[$route.params.id].introduce }}</p>
            <button>
                <router-link to="/">
                    되돌아가기
                </router-link>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name:"SubComp",
    props:{
        game:Array
    }
}
</script>

<style lang="scss">
h1,h2,h3,h4,h5 { font-size: 100%; }
.boxs{
    margin-top:200px ;
    display: flex;
    width: 1000px;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 400px;
    .right{
        width:400px;
        img{
            width:100%;
        }
    }
    .text{
        width: 350px;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 80px;
        button{
            border: none;
            width:150px;
            height: 50px;
            margin-top: 50px;
            background-color: pink;

        }
    }
}

</style>