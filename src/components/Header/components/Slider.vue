<template>
    <div class="container">
        <div class="slider">
            <div class="slider-content">
               <div class="slider-btns">
                <button><i class="fas fa-chevron-right"></i></button>
                <button><i class="fas fa-chevron-right"></i></button>
              </div>
            <h1>
               {{counter}}
            </h1>
            </div>
            <div class="slider-images">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
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
</style>
