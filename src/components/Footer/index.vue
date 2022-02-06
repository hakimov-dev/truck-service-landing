<template>
    <footer>
       <div class="container pb-8 flex justify-between items-center">
          <div class="contents w-3/4">
                <div class="content flex flex-col">
                   <h1 class="py-4 text-4xl  font-bold">Logo</h1>
                   <p class="w-2/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in integer faucibus nisl. Gravida pellentesque cras proin accumsan. Massa at ut et dui viverra id turpis.</p>
                </div>
          </div>
          <div class="contents1 flex justify-between items-center w-full">
              <div class="content1 flex flex-col leading-8">
                  <h1 class="title font-bold">Hususiyatlar</h1>
                  <a href="#" class="footer-link">Servislar</a>
                  <a href="#" class="footer-link">Aloqa</a>
                  <a href="#" class="footer-link">Narh</a>
              </div>
              <div class="content1 flex flex-col leading-8">
                  <h1 class="title font-bold">Biz haqimizda</h1>
                  <a href="#" class="footer-link">Kariyera</a>
                  <a href="#" class="footer-link">Biz nima qilamiz</a>
                  <a href="#" class="footer-link">FAQ</a>
              </div>
              <div class="content1 flex flex-col leading-8">
                  <h1 class="title font-bold">Til <i class="fas fa-angle-down"></i></h1>
                  <h2 class="pb-2">Ijtimoiy tarmoqlarimiz</h2>
                  <div class="flex justify-around items-center">
                      <a href="#"><img src="@/assets/img/social1.png" alt=""></a>
                      <a href="#"><img src="@/assets/img/social2.png" alt=""></a>
                      <a href="#"><img src="@/assets/img/social3.png" alt=""></a>
                  </div>
              </div>
          </div>
       </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .content1:nth-child(3) h2{
     margin-top:20px ;
  }
</style>
