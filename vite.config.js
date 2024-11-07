import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path, {resolve} from 'path';
import Components from 'unplugin-vue-components/vite'
import {NaiveUIResolver} from 'unplugin-vue-components/resolvers'

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), Components({
        resolvers: [NaiveUIResolver()],
    }),],
    resolve: {
        alias: {
            "@": resolve(__dirname, 'src'), // 路径别名
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                // 如果需要修改 Less 默认的主题变量
                modifyVars: {
                    'primary-color': '#42b983',
                },
                javascriptEnabled: true,  // 使得 Less 中可以支持 JavaScript
                additionalData: `
                  @import "@/assets/styles/variables.less";
                  @import "@/assets/styles/mixins.less";
                `,
            },
        },
    },
})
