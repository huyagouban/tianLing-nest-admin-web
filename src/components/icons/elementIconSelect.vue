<template>
    <div class="icon-list">
        <div class="icon-list-item" v-for="item in getIcon">
            <div :class="['icon-list-item-active', iconSelectName == item ? 'active' : '']" @click="iconActive(item)">
                <component class="commonIconClass" :is="item"></component>
                <span>{{ item }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const emit = defineEmits(['iconActiveSelect'])
type propType = {
    iconSelectName?: string;
}
const prop = withDefaults(defineProps<propType>(), {
    iconSelectName: ''
})
const getIcon = computed(() => {
    let icons = { ...ElementPlusIconsVue }
    let arr = [];
    for (let i in icons) {
        arr.push(i)
    }
    return arr
});
const iconActive = (item: string) => {
    emit('iconActiveSelect', item, 'element')
    // 模拟点击事件
    document.body.click();
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/commonIcon.scss";

.icon-list {
    display: flex;
    flex-wrap: wrap;
    height: 300px;
    overflow: auto;

    .icon-list-item {
        width: calc(100% / 3);
        height: 25px;
        line-height: 25px;

        .icon-list-item-active {
            width: fit-content;
            display: flex;
            align-items: center;
            padding: 0 5px;
            cursor: pointer;

            span {
                padding-left: 5px;
            }
        }

        .icon-list-item-active:hover {
            background: #ececec;
        }

        .active {
            background: #ececec;
        }

    }
}
</style>