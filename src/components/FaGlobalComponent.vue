<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'Hello from FaGlobalComponent'
      }
    }
  }
</script>
<style scoped>
  h3 {
    color: rgb(0, 149, 255);
  }
</style>
