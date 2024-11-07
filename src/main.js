import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // 引入路由配置
// 引入 Naive UI
import NaiveUI from 'naive-ui'

const app = createApp(App);
app.use(router); // 使用路由
// 使用 Naive UI
app.use(NaiveUI)
app.mount('#app');
