<template>
	<div class="page">
		<div v-if="$store.getters.list.length > 0">
			<div class="list" v-for="(item, index) in list" :key="index">
				<div class="content"><input type="checkbox" v-model="item.complete" @click="checkbox(item.complete, index)" /> {{ item.title }}</div>
				<button class="delete" @click="del(item, index)">删除</button>
			</div>
		</div>
		<div class="nodata" v-else>暂无事件</div>
	</div>
</template>

<script>
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
	name: '',
	components: {},
	props: {},
	setup() {
		const store = useStore()
		const state = reactive({
		})
		const del = (item, index) => {
			//删除
			store.dispatch('num/dellist', index)
		}
		const list = computed(()=>{
			return store.getters.list
		})
		const checkbox = (item, index) => {
			store.dispatch('num/changechexbox',{index:index,val:item})
		}
		return { ...toRefs(state), del, checkbox,list }
	}
})
</script>
<style lang="scss" scoped>
.page {
	margin: 10px 0;
	.list {
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
		cursor: pointer;
		.delete {
			display: none;
			cursor: pointer;
		}
		&:hover {
			background-color: #ccc;
			.delete {
				display: block;
			}
		}
	}
	.nodata {
		padding: 5px 10px;
	}
}
</style>
