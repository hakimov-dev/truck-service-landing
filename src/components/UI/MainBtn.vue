<template>
    <button class="main-btn">{{title}}</button>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.main-btn {
  color: #2c3178;
  border: 1px solid #2c3178;
  background: #fff;
}
</style>
