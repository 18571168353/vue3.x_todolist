<template>
	<div class="page">
		<input placeholder="请输入任务名称" v-model="value" @keydown.enter="add" />
	</div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
	name: '',
	components: {},
	props: {},
	setup() {
		const store = useStore()
		const state = reactive({
			value: ''
		})
		const add = () => {
			if (state.value.trim() != '') {
				let is = store.getters.list.filter((item) => {
					return item.title == state.value
				})
				if (is.length == 0) {
					store.dispatch('num/addlist', [{ title: state.value, complete: false }])
					state.value = ''
				} else {
					alert(`${state.value}事件已添加`)
				}
			}else{
				console.log(11);
			}
		}
		return { ...toRefs(state), add }
	}
})
</script>
<style lang="scss" scoped>
.page {
	padding: 0 10px;
	input {
		width: 100%;
	}
}
</style>
