import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'; // 你可以根据实际路径修改
import dynamicList from '@/views/dynamicList.vue'; // 同上

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/dynamic',
        name: 'dynamic',
        component: dynamicList,
    },
    // 你可以继续在这里添加其他路由
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
