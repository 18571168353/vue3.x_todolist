<template>
	<div class="Child">我是子组件:{{ message }}</div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
export default defineComponent({
	name: 'Child',
	components: {},
	props: {
		msg: {
			type: String, //数据类型校验
			required: true, //是否必传
			default: '' //默认值
		}
	},
	watch: {},
	setup(props, ctx) {
		onMounted(() => {
      send()
		})
		let send = () => {
			ctx.emit('send', [state.childdata,'第二个数据'])
		}
		const state = reactive({
			message: props.msg,
			childdata: '我是子组件的数据'
		})
		return { ...toRefs(state),send }
	}
})
</script>
<style lang="scss" scoped></style>
