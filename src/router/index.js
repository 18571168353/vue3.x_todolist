import { createRouter, createWebHistory } from 'vue-router'
const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/about',
		name: 'Aome',
		component: () => import('../views/About.vue')
	}
]

const router = createRouter({
	mode: 'hash',
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
