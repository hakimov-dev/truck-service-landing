<template>
    <div class="img-container">
     <img class="cardsBottom2" src="@/assets/img/cards-bottom1-2.png" alt="">
     <img class="cardsBottom3" src="@/assets/img/cards-bottom3.png" alt="">
    </div>
    <div class="container" id="weWhatDo">
      <div class="content-1 w-3/5">
          <span class="text-2xl">UMUMAN OLGANDA</span>
          <h1 class="text-6xl font-bold">Biz nima qilamiz?</h1>
          <br>
          <p class="leading-8 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque pellentesque cursus arcu tincidunt nam. Dignissim nec nec facilisis vel, elit, purus fermentum. Cras metus, egestas tortor, nisi, at est facilisis ac feugiat. Eu.</p>
         <br><br>
          <a href="#contact" class="main-btn">Aloqaga chiqish <i class="fas fa-chevron-right"></i></a>
      </div>
      <div class="content-2"></div>
    </div>
</template>

<script>
export default {
  name: 'weWhatDo'
}
</script>

<style scoped>
  .cardsBottom3{
    position: absolute;
    right: -0px;
   }
   .cardsBottom2{
       position: absolute;
       left: -0px;
       width: 300px;
       object-fit: cover;
       object-position: center center;
   }
   .container{
       margin-top: 25%;
   }
   .content-1{
       margin-bottom: 20px;
       width: 710px;
       height: 545px;
       background: #F5F9FF;
       padding: 60px;
       padding-top: 120px;
       margin-left: -30px;
   }

</style>
