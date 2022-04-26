<template>
	<div class="home">
		<Header />
		<Main />
		<Footer />
	</div>
</template>

<script setup>
import Header from '@/components/navHeader'
import Main from '@/components/navMain'
import Footer from '@/components/navFooter'
import { ref } from 'vue'
</script>
<style lang="scss" scoped>
.home {
	margin: 200px auto;
	width: 240px;
	border: 1px solid #ccc;
	padding: 20px;
	box-shadow: 0 0 20px #ccc;
}
</style>
