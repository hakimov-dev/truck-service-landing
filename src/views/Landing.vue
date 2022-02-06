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
  }
}
</script>
