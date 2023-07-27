import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import BoardView from '../views/BoardView.vue';
import CardView from '../views/CardView.vue';

const routes = [
	{
		path: '/',
		component: HomeView,
	},
	{
		path: '/login',
		component: LoginView,
	},
	{
		path: '/b/:bid',
		component: BoardView,
		children: [
			{
				path: 'c/:cid',
				component: CardView,
			},
		],
	},
	{
		//https://dev.to/0xbf/vue3-setup-router-for-notfound-page-22p6
		//https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
		path: '/:pathMatch(.*)*',
		component: NotFoundView,
	},
	// {
	//   path: '/about',
	//   name: 'about',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
