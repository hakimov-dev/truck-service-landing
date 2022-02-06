<template>
   <Header />
   <Content />
   <About />
   <Contact />
   <Footer />
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
export default {
  name: 'Landing',
  components: {
    Header, Content, About, Contact, Footer
  },

  created () {
    window.addEventListener('scroll', () => {
      const reveals = document.querySelectorAll('.reveal')

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const revealTop = reveals[i].getBoundingClientRect().top
        const revealPoint = 50

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active')
        }
      }
    })
  }
}
</script>

<style>
.reveal {
  position: relative;
  transform: translateY(120px);
  opacity: 0;
  transition: all 3s ease
}

.reveal.active {
  transform: translateY(0);
  opacity: 1;
}
</style>
