<template>
      <div class="h-screen">
       <Navbar/>
       <Content/>
       <Slider/>
      </div>
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
