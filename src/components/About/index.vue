<template>
    <div class="container" id="about">
         <div class="content1">
           <img class="content-1" src="@/assets/img/content-2.1.png" alt="">
           <img class="content-2" src="@/assets/img/content-2.2.png" alt="">
           <img class="content-3" src="@/assets/img/content-2.3.png" alt="">
         </div>
         <div class="content2"></div>
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
