<template>
    <div class="container">
    <div class="navbar flex justify-between items-center">
       <h1 class="logo">Logo</h1>
       <div class="links w-2/4 hidden justify-between items-center md:flex">
           <a href="#" class="link">Asosiy</a>
           <a href="#weWork" class="link">Biz qanday ishlaymiz</a>
           <a href="#weWhatDo" class="link">Biz nima qilamiz</a>
           <a href="#about" class="link">Biz haqimizda</a>
           <a href="#contact" class="main-btn">Aloqaga chiqish <i class="fas fa-chevron-right"></i></a>
       </div>
       <img @click="openSidenav()" class="menu md:hidden" src="@/assets/icons/menu.png"/>
    </div>
    <MobileNavVue v-if="sideNav"/>
    </div>
</template>

<script>
import MobileNavVue from './MobileNav.vue'
export default {
  name: 'Navbar',
  components: {
    MobileNavVue
  },
  data () {
    return {
      sideNav: false
    }
  },

  methods: {
    openSidenav () {
      this.sideNav = !this.sideNav
    }
  }
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
