<template>
    <div class="container">
        <div class="slider hidden justify-between md:flex">
            <div class="slider-content">
               <div class="slider-btns">
                <button @click="previous()"><i class="fas fa-chevron-left"></i></button>
                <button @click="next()"><i class="fas fa-chevron-right"></i></button>
              </div>
            <h1 class="pt-16 text-center text-9xl">
               0{{counter}}
            </h1>
            </div>
           <div class="parrent">
            <div class="slider-images flex justify-between items-center">
                <img src="@/assets/img/slider-1.png" alt="">
                <img src="@/assets/img/slider-2.png" alt="">
                <img src="@/assets/img/slider-3.png" alt="">
                <img src="@/assets/img/slider-4.png" alt="">
            </div>
           </div>
        </div>
    </div>
    <img class="slider-bottom-1" src="@/assets/img/slider-bottom-1.png" alt="">
    <img class="slider-bottom-2" src="@/assets/img/slider-bottom-2.png" alt="">
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      counter: 1
    }
  },

  methods: {
    previous () {
      if (this.counter !== 1) {
        this.counter--
        const slider = document.querySelector('.slider-images')
        slider.style.marginLeft = '-0px'
      }
    },

    next () {
      if (this.counter !== 2) {
        this.counter++
        const slider = document.querySelector('.slider-images')
        slider.style.marginLeft = '-1200px'
      }
    }
  }
}
</script>

<style scoped>
.slider{
    margin-top: 50px;
    margin-bottom: 20px;
}
.slider-bottom-1, .slider-bottom-2{
  position: absolute;
  right: -0px;
}

.slider-bottom-1{
    z-index: -111;
}
.slider-bottom-2{
    z-index: 111;
    bottom: -30%;
}
button{
    width: 65px;
    height: 65px;
    background: #F8FCFE;
    margin: 0px 20px;
    transition: all .3s linear;
    border-radius: 10px;
}

button:hover, button:focus{
     background: #DEF7FF;
}
.slider-images img{
   width: 600px;
    height: 350px;
    margin: 0px 10px;
    margin-bottom: 10px;
}
.parrent{
    position: absolute;
    right: -0px;
    width: 1000px;
    height: 350px;
    overflow: hidden;
}
.slider-images{
    margin-left:-0px ;
    transition: all.8s linear;
}
</style>
