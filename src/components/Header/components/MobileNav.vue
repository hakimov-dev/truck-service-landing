<template>
    <div class="sidenav md:hidden flex flex-col text-center">
     <a href="#weWork" class="link p-2">Biz qanday ishlaymiz</a>
     <a href="#weWhatDo" class="link p-2">Biz nima qilamiz</a>
     <a href="#contact" class="link p-2">Aloqa</a>
    </div>
</template>

<script>
export default {
  name: 'MobileNav'
}
</script>

<style scoped>
  .sidenav{
      background: transparent ;
      position: absolute;
      width: 91%;
      padding: 30px 0px;
      z-index: 111;
      font-weight: 600;
     background: rgb(2,0,36);
     background: linear-gradient(252deg, rgba(2,0,36,1) 0%, rgba(180,180,180,0.06206232492997199) 0%, rgba(224, 232, 245, 0.836) 0%);
 }
</style>
