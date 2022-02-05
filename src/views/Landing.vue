<template>
   <Header />
   <Content />
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
export default {
  name: 'Landing',
  components: {
    Header, Content
  }
}
</script>
