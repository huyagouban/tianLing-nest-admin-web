import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import path from "path";
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env=loadEnv(mode, process.cwd())
  const { VITE_APP_ENV } = env
  // VITE_APP_ENV === 'production' ? '/tianLing-nest-admin-web/' :
  return {
    base:  './',
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver(),],
        imports: ['vue', 'vue-router', 'pinia',],
      }),
      Components({
        resolvers: [ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep",],
        }),],
      }),
      Icons({
        autoInstall: true,
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],//svg-icon 文件夹路径
        symbolId: 'icon-[dir]-[name]'
      }),
      viteCompression({
        filter: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, // 需要压缩的文件
        threshold: 1024, // 文件容量大于这个值进行压缩
        algorithm: 'gzip', // 压缩方式
        ext: 'gz', // 后缀名
        deleteOriginFile: true, // 压缩后是否删除压缩源文件
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080/api/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        }
      }
    }
  }

})
