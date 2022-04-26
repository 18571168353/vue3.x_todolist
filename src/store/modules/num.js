export default {
	namespaced: true,
	state: () => ({
		list: [
			{ title: '吃饭', complete: false },
			{ title: '睡觉', complete: true },
			{ title: '敲代码', complete: false }
		],
		alreadynum: 1
	}),
	mutations: {
		add(state, newlist) {
			state.list.push(newlist)
		},
		del(state, index) {
			state.list.splice(index, 1)
		},
		change(state, row) {
			state.list[row.index].complete = row.val
		},
		clearall(state, list) {
			state.list = list
		}
	},
	actions: {
		addlist({ commit }, news) {
			commit('add', news[0])
		},
		dellist({ commit }, index) {
			commit('del', index)
		},
		changechexbox({ commit }, row) {
			commit('change', row)
		},
		clearalreadyall({ commit }, list) {
			commit('clearall', list)
		}
	}
}
