<template>
   <img src="@/assets/img/header-1.png" class="md:flex hidden header-1" alt="404">
   <img src="@/assets/img/header-2.png" class="md:flex hidden header-2" alt="404">
    <div class="container">
      <div class="main-content flex justify-between items-center">
         <div class="content-1">
             <h1 class="text-6xl font-semibold">Yuklarmi?</h1>
             <h2 class="text-4xl font-semibold">Biz bila aloqaga chiqing</h2>
         </div>
         <div class="content-2 w-2/6">
             <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in facilisi praesent at magna. In pellentesque hac eget gravida egestas. Massa turpis </p>
             <br>
             <a href="#contact" class="main-btn">Aloqaga chiqish <i class="fas fa-chevron-right"></i></a>
         </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderContent'
}
</script>

<style scoped>
  .header-1{
      position: absolute;
      top: -0px;
      right: -0px;
      z-index: -1111;
  }

.main-content{
      position: absolute;
      top: 20%;
      padding-right: 25px;
  }
</style>
