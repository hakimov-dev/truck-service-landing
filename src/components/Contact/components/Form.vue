<template>
    <form class="flex flex-col">
     <label for="name">Ism, Familya</label>
     <input type="text" id="name" placeholder="To’liq ismingizni kiriting">
     <label for="phone">Telefon raqam</label>
     <input type="number" id="phone" placeholder="Telefon raqamingizni kiriting">
     <label for="message">Qo’shimcha xabar (Ixtiyoriy)</label>
     <textarea placeholder="Xabaringizni kiriting" id="message" cols="30" rows="10"></textarea>
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
      height: 660px;
      margin-bottom: 9% !important;
      background: #D8E7FF;
      text-align: center;
      padding: 80px 0px;
      position: absolute;
      right: 3%;
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
      padding: 20px;
  }

  input::placeholder, textarea::placeholder{
      color: #2C3178;
  }
  textarea{
      padding: 20px !important;
      font-size: 16px;
      height: 150px;
      resize: none;
  }

  button{
      margin-bottom: -2%;
      margin-right: 10%;
  }

  input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
   }

</style>
