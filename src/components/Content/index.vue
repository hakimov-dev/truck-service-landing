<template>
    <div id="weWork" class="main-content container">
    <h1 class="title text-4xl font-extrabold py-8">Biz qanday ishlaymiz?</h1>
    <div class="cards flex justify-between items-center py-8">
     <Card class="w-3/12" :card="card" v-for="(card, idx) in cards" :key="idx"/>
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
        {
          img: require('@/assets/img/card-1.png'),
          title: 'Biz og’ir yuklaringizni olamiz',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in facilisi praesent at magna. In pellentesque hac eget gravida'
        },
        {
          img: require('@/assets/img/card-2.png'),
          title: 'Tezkor va xafsiz olib boramiz',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in facilisi praesent at magna. In pellentesque hac eget gravida'
        },
        {
          img: require('@/assets/img/card-3.png'),
          title: 'Aytilgan joyga eltamiz',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in facilisi praesent at magna. In pellentesque hac eget gravida'
        }
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
