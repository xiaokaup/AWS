//button.vue
<template>
  <div class="button-warp">
    <button class="button">text</button>
  </div>
</template>

<script>
  export default {
    name: 'button'
  }
</script>

<style scoped>
  .button-warp{
    display:inline-block;
  }
  .button{
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 2px;
  }
</style>