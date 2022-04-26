import { createStore } from 'vuex'
import num from './modules/num'
import getters from './getters'
export default createStore({
	modules: { num },
	getters
})
