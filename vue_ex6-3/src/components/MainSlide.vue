<template>
    <div class="slider">
        <div class="view">
            <div v-for="(views,i) in 4" :key="i">슬라이드{{ i+1 }}</div>
        </div>
        <ul class="circles">
            <li v-for="(circles,i) in 4" :key="i"><a href="#"></a></li>
        </ul>
        <button class="prev">이전</button>
        <button class="next">이후</button>
        <button class="stop">멈춤</button>
        <button class="play">실행</button>
    </div>
</template>

<script>
export default {
    name:"MainSlider",
    mounted(){
        // 스크립트 작업구간 
        const view = document.querySelector(".view");
        const prev = document.querySelector(".prev");
        const next = document.querySelector(".next");
        const circles = document.querySelectorAll(".circles li");
        const stop = document.querySelector(".stop");
        const play = document.querySelector(".play");


        let sNumber = 0;

        let autoSlide = setInterval(function(){
            if(sNumber === circles.length-1){
                sNumber = 0;
            }
            else{
                sNumber++;
            }
            for(let j=0; j < circles.length; j++){
                    circles[j].classList.add("on");
                }
                circles[sNumber].classList.remove("on");
            view.style.marginLeft = sNumber * -100 + "%"
        },3000);

        stop.onclick = function(){
            clearInterval(autoSlide);
        }

        play.onclick = function(){
            if(sNumber === circles.length-1){
                sNumber = 0;
            }
            else{
                sNumber++;
            }
        }
        next.onclick = function(){
            if(sNumber === circles.length-1){
                sNumber=0;
            }
            else{
                sNumber+=1;
            }
            view.style.marginLeft = sNumber * -100 + "%";
            }
        prev.onclick = function(){
            if(sNumber == 0){
                sNumber= circles.length-1;
            }
            else{
                sNumber= sNumber-1;
            }
            view.style.marginLeft = sNumber * -100 + "%";
        }

        for(let i=0; circles.length; i++){
            circles[i].onclick = function(){
                sNumber = i;
                view.style.marginLeft = sNumber * -100 + "%"
                for(let j=0; j < circles.length; j++){
                    circles[j].classList.add("on");
                }
                circles[sNumber].classList.remove("on");
            }
        }
    }
}
</script>

<style>

    .slider{
        width:1200px; margin:0 auto; overflow: hidden;
    }
    .slider .view { width:400%; display: flex; transition: all 0,5s; }
    .slider .view > div { width:25%; height: 400px; }
    .slider .view > div:nth-child(1) { background-color: palegoldenrod; }
    .slider .view > div:nth-child(2) { background-color: paleturquoise; }
    .slider .view > div:nth-child(3) { background-color: palegreen; }
    .slider .view > div:nth-child(4) { background-color: palevioletred; }

    .slider .circles { display: flex;  }
    .slider .circles li a { margin-left: 5px; display: block; width:20px; height: 20px; background-color: #000; }
    .slider .circles li.on a { background-color: pink; }
</style>