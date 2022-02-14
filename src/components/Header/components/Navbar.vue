<template>
    <div class="container">
    <div class="navbar flex justify-between items-center">
       <h1 class="logo">Logo</h1>
       <div class="links w-2/4 flex justify-between items-center">
        <div class="desktop-nav">
           <a href="#" class="link">Asosiy</a>
           <a href="#weWork" class="link">Biz qanday ishlaymiz</a>
           <a href="#weWhatDo" class="link">Biz nima qilamiz</a>
           <a href="#about" class="link">Biz haqimizda</a>
           <a href="#contact" class="main-btn">Aloqaga chiqish <i class="fas fa-chevron-right"></i></a>
        </div>
       </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style soped>
.navbar{
    padding-top: 1rem;
    padding-bottom: 2rem;
}

 .links{
     color: #113873;
     font-size: 16px;
     letter-spacing: -0.035em;
     font-weight: normal;
 }
</style>
