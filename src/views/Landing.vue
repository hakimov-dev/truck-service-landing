<template>
   <Header />
   <Content />
   <About />
   <Contact />
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import About from '@/components/About'
import Contact from '@/components/Contact'
export default {
  name: 'Landing',
  components: {
    Header, Content, About, Contact
  }
}
</script>
