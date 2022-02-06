<template>
    <form class="flex flex-col">
     <label for="name">Ism, Familya</label>
     <input type="text" id="name" placeholder="To’liq ismingizni kiriting">
     <label for="phone">Telefon raqam</label>
     <input type="number" id="phone" placeholder="Telefon raqamingizni kiriting">
     <label for="message">Qo’shimcha xabar (Ixtiyoriy)</label>
     <textarea id="message" cols="30" rows="10"></textarea>
     <button class="main-btn w-2/12 m-auto">Jo’natish</button>
    </form>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped>
  form{
      width:620px;
      height: 683px;
      background: #D8E7FF;
      text-align: center;
      padding: 80px 0px;
      position: absolute;
      right: 6%;
  }

  input, textarea{
      width: 80%;
      margin: 0 auto;
      outline: none;
       margin-top: 10px;
    margin-bottom: 10px
  }

 label{
     font-size: 22px;
     font-weight: 600;
 }

  input{
      padding: 10px;
  }
  textarea{
      padding: 20px !important;
      font-size: 16px;
  }
</style>
