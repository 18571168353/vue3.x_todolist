<template>
	<div class="page">
		<div class="num">已完成{{ alreadynum }}/全部{{ $store.getters.list.length }}</div>
		<div class="clear">
			<button @click="clearalready" v-if="alreadynum > 0">清除已完成</button>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'
export default {
	components: {},
	setup() {
		const store = useStore()
		const state = reactive({})
		let alreadynum = computed(() => {
			let arr = store.getters.list.filter((item) => {
				return item.complete == true
			})
			return arr.length
		})
		const clearalready = () => {
			let arr = store.getters.list.filter((item) => {
				return item.complete == false
			})
			store.dispatch('num/clearalreadyall',arr)
		}
		return { ...toRefs(state), clearalready, alreadynum }
	}
}
</script>
<style lang="scss" scoped>
.page {
	padding: 0 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
