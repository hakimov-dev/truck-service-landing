<template>
    <div class="card">
     <img :src="card.img" :alt="card.img">
     <h1 class="title">{{card.title}}</h1>
     <p class="body">{{card.body}}</p>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['card']
}
</script>

<style scoped>

</style>
