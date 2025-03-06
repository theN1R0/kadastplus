import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('@/Home.vue') },
    { path: '/services/plan', component: () => import('@/service/Plan.vue') },
    { path: '/services/act', component: () => import('@/service/Act.vue') },
    { path: '/services/mej', component: () => import('@/service/Mej.vue') },
    { path: '/services/razdel', component: () => import('@/service/Razdel.vue') },
    { path: '/services/obiedinenie', component: () => import('@/service/Obiedinenie.vue') },
    { path: '/services/vynos', component: () => import('@/service/Vynos.vue') },
    { path: '/services/pereraspredelenie', component: () => import('@/service/Pereraspredelenie.vue') },
    { path: '/services/proekt', component: () => import('@/service/Proekt.vue') },
    { path: '/services/oformlenie', component: () => import('@/service/Oformlenie.vue') },
    { path: '/services/topo', component: () => import('@/service/Topo.vue') },
    { path: '/services/garaj', component: () => import('@/service/Garaj.vue') },
];

const router = createRouter({
    history: createWebHashHistory(), // заменяем на hash-режим
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0);
});

export default router;
