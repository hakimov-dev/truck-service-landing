<template>
    <div class="img-container">
     <img class="cardsBottom2" src="@/assets/img/cards-bottom1-2.png" alt="">
     <img class="cardsBottom3" src="@/assets/img/cards-bottom3.png" alt="">
    </div>
    <div class="container" id="weWhatDo">
      <h1>This is weWhatDo component.</h1>
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
</style>
