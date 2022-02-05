<template>
    <div id="weWork" class="main-content container">
    <h1 class="title text-4xl font-extrabold py-8">Biz qanday ishlaymiz?</h1>
    <div class="cards">
     <Card />
    </div>
    </div>
</template>

<script>
import Card from './components/Card'
export default {
  name: 'Content',
  components: {
    Card
  },

  data () {
    return {
      cards: [
        
      ]
    }
  }
}
</script>

<style scoped>
.main-content{
    margin-top:14%;
}
</style>
