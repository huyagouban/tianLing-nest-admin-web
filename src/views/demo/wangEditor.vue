<template>
    <div>
        <el-card>
            <wangEditor :modelValue="modelValue" @modelValueChange="modelValueChange"></wangEditor>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import wangEditor from "@/components/wangEditor/index.vue";
// 富文本内容
const modelValue = ref("123");
/**
 * @param value 富文本内容
 * @returns 富文本内容改变时的回调
 */
const modelValueChange = (value: string) => {
    modelValue.value = value;
}
</script>

<style scoped lang="scss"></style>