<template>
    <div v-for="item in props.dictDataOption">
        <span class="defaultTag"
            v-if="(item.cssClass == '' || item.cssClass == 'default' || item.cssClass == null || item.cssClass == undefined) && item.dictDataValue == props.operType">{{
                item.dictDataLabel }}</span>
        <el-tag
            v-else-if="!(item.cssClass == '' || item.cssClass == 'default' || item.cssClass == null || item.cssClass == undefined) && item.dictDataValue == props.operType"
            :type="item.cssClass">{{ item.dictDataLabel }}</el-tag>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['dictDataOption', 'operType'])
</script>

<style scoped lang="scss"></style>