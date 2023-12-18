import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			component: () => import("@/views/AboutView.vue"),
		},
		{
			path: "/portfolio",
			name: "portfolio",
			component: () => import("@/views/PortfolioView.vue"),
		},
		{
			path: "/portfolio/:id",
			name: "projectDetail",
			component: () => import("@/components/portfolio/ProjectPage.vue"),
			props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("@/views/ContactView.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: () => import("@/views/NotFound.vue"),
		},
	],
	linkActiveClass: "active",
});

export default router;
