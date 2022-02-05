<template>
   <img src="@/assets/img/header-1.png" class="header-1" alt="404">
   <img src="@/assets/img/header-2.png" class="header-2" alt="404">
    <div class="container">
      <div class="main-content">
         <div class="content-1">
             <h1 class="text-6xl font-semibold">Yuklarmi?</h1>
             <h2 class="text-4xl font-semibold">Biz bila aloqaga chiqing</h2>
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

  .content-1{
      position: absolute;
      top: 25%;
  }
</style>
