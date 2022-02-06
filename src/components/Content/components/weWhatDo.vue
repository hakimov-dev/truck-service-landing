<template>
     <img class="cardsBottom1" src="@/assets/img/cards-bottom1.png" alt="">
     <img class="cardsBottom2" src="@/assets/img/cards-bottom2.png" alt="">
     <img class="cardsBottom3" src="@/assets/img/cards-bottom3.png" alt="">
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
   .cardsBottom1, .cardsBottom2, .cardsBottom3{
    position: absolute;
   }
   .cardsBottom1, .cardsBottom2{
       left: -0px;
   }
   .cardsBottom2{
     top: 20%;
     z-index: 11111;
   }
   .cardsBottom3{
       right: -0px;
   }
</style>
