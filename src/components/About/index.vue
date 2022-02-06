<template>
    <div class="container flex justify-between items-center" id="about">
         <div class="content1">
           <img class="content-1" src="@/assets/img/content-2.1.png" alt="">
           <img class="content-2" src="@/assets/img/content-2.2.png" alt="">
           <img class="content-3" src="@/assets/img/content-2.3.png" alt="">
         </div>
         <div class="content2 w-3/5">
          <span class="text-2xl">QISQACHA</span>
           <h1 class="text-6xl font-bold">Biz haqimizda</h1>
          <br>
           <p class="leading-8 text-left w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pellentesque cursus arcu tincidunt nam. Dignissim nec nec facilisis vel, elit, purus fermentum. Cras metus, egestas tortor, nisi, at est facilisis ac feugiat. Eu.</p>
          <br><br>
           <a href="#contact" class="main-btn">Aloqaga chiqish <i class="fas fa-chevron-right"></i></a>
         </div>
    </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  .container{
      margin-top: 10%;
  }
  .content-2{
    margin-top: -60%;
    margin-left: -10%;
    position: absolute;
    z-index: -111;
  }

  .content-3{
      margin-top: -8%;
      margin-left: 30%;
      position: absolute;
      z-index: -111;
  }
</style>
