<template>
	<div class="content">
		<p class="title">Button_container</p>
		<Button/>
	</div>
</template>

<script>
	import Button from './Button_test.vue'

	export default {
		name: 'Button_container',
		components: {
			Button
		}
	}
</script>

<style scoped>
  .content{
    width: 1200px;
    margin: 0 auto;
  }
</style>
<style>
  .content .button{
    border-radius: 50% !important;
  }
</style>