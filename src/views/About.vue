<template>
	<div class="about">
		我是父组件:{{ sondata }}   子组件传过来的第二个数据:{{sondatatwo}}
		<Child :msg="msg" @send="sendchilddata" />
	</div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import Child from '../components/child'
export default defineComponent({
	name: 'About',
	components: { Child },
	props: {},
	watch: {},
	setup(props, ctx) {
		onMounted(() => {
    })
		const state = reactive({
			msg: '我是父组件的数据',
			sondata: '',
      sondatatwo:null
		})
		let sendchilddata = (val) => {
			state.sondata = val[0]
      state.sondatatwo = val[1]
		}
		return { ...toRefs(state), sendchilddata }
	}
})
</script>
<style lang="scss" scoped>
.about{
  margin: 50px;
}
</style>
