<template>
    <div class="container">
       <TextContent />
       <Form />
    </div>
</template>

<script>
import TextContent from './components/TexContent'
import Form from './components/Form'
export default {
  name: 'Contact',
  components: {
    TextContent, Form
  }
}
</script>

<style scoped>

</style>
