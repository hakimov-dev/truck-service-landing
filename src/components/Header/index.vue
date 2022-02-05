<template>
       <Navbar/>
       <Content/>
       <Slider/>
</template>

<script>
import Navbar from './components/Navbar'
import Content from './components/Content'
import Slider from './components/Slider'
export default {
  name: 'Header',
  components: {
    Navbar, Content, Slider
  }
}
</script>
