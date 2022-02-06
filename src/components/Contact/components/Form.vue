<template>
    <form>
     <label for="name">Ism, Familya</label>
     <input type="text" id="name" placeholder="To’liq ismingizni kiriting">
     <label for="phone">Telefon raqam</label>
     <input type="phone" placeholder="Telefon raqamingizni kiriting">
     <label for="message">Qo’shimcha xabar (Ixtiyoriy)</label>
     <textarea id="message" cols="30" rows="10"></textarea>
    </form>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped>

</style>
