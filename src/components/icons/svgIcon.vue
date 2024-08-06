<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName" :fill="props.color" />
    </svg>
</template>

<script setup lang="ts">
type propsType = {
    iconClass: string;
    className: string;
    color?: string;
}
const props = withDefaults(defineProps<propsType>(), {
    // 图标名称
    iconClass: '',
    // 样式类名
    className: '',
    // 颜色
    color: '',
})

const svgClass = computed(() => {
    if (props.className) {
        return `svg-icon ${props.className}`
    }
    return 'svg-icon'
})

const iconName = computed(() => {
   return `#icon-${props.iconClass}`
})
</script>

<style scoped lang="scss">
.sub-el-icon,
.nav-icon {
    display: inline-block;
    font-size: 15px;
    margin-right: 12px;
    position: relative;
}

.svg-icon {
    width: 1em;
    height: 1em;
    position: relative;
    fill: currentColor;
    vertical-align: -2px;
}
</style>