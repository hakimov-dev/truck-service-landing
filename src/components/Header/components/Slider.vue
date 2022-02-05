<template>
    <div class="container">
        <div class="slider flex justify-between">
            <div class="slider-content">
               <div class="slider-btns">
                <button><i class="fas fa-chevron-left"></i></button>
                <button><i class="fas fa-chevron-right"></i></button>
              </div>
            <h1>
               {{counter}}
            </h1>
            </div>
            <div class="slider-images flex justify-between items-center overflow-hidden">
                <img src="@/assets/img/slider-1.png" alt="">
                <img src="@/assets/img/slider-2.png" alt="">
                <img src="@/assets/img/slider-3.png" alt="">
                <img src="@/assets/img/slider-4.png" alt="">
                <img src="@/assets/img/slider-5.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      counter: 0
    }
  }
}
</script>

<style scoped>
img{
   width: 600px;
    height: 350px;
    margin: 0px 10px;
}
.slider-images{
    width: 1000px;
    position: absolute;
    right: -0px;
    transition: .8s linear;
}
</style>
