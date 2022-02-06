<template>
   <Header />
   <Content />
   <About />
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import About from '@/components/About'
export default {
  name: 'Landing',
  components: {
    Header, Content, About
  }
}
</script>
