<template>
    <div class="icon-list">
        <div class="icon-list-item" v-for="item in svgIcons">
            <div :class="['icon-list-item-active', prop.iconSelectName == item ? 'active' : '']"
                @click="iconActive(item)">
                <svg-icon :iconClass="item" className="icon"></svg-icon>
                <span>{{ item }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import svgIcons from "@/components/icons/requireIcons";
const emit = defineEmits(['iconActiveSelect'])
type propType = {
    iconSelectName?: string;
}
const prop = withDefaults(defineProps<propType>(), {
    iconSelectName: ''
})
const iconActive = (item: string) => {
    emit('iconActiveSelect', item, 'svg')
    // 模拟点击事件
    document.body.click();
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/commonIcon.scss";

.icon-list {
    display: flex;
    flex-wrap: wrap;
    max-height: 300px;
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