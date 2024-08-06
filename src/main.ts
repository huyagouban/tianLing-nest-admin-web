
import "@/assets/css/common.css"
import "@/assets/scss/elementPlus.scss";
import "@/assets/scss/transition.scss"
import "@/assets/scss/commonIcon.scss";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim"
import App from './App.vue'
import router from './router'
import { hasPermi } from "@/directive/hasPermi";
import "@/routers";
import "virtual:svg-icons-register";
import svgIcon from "@/components/icons/svgIcon.vue";
import icon from"@/components/icons/icon.vue"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Particles, {
    init: async (engine: any) => {
        // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
        await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    }
});
/**
 * element-plus 图标
 */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.component('svg-icon', svgIcon)
app.component('tl-icon', icon)
// 自定义指令
app.directive('hasPermi', hasPermi)
app.mount('#app')
