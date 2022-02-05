<template>
       <Navbar/>
       <Content/>
</template>

<script>
import Navbar from './components/Navbar'
import Content from './components/Content'
export default {
  name: 'Header',
  components: {
    Navbar, Content
  }
}
</script>
