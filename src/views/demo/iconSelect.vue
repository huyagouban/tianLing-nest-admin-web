<template>
    <div>
        <el-card>
            <el-popover placement="bottom" width="508" trigger="click">
                <template #reference>
                    <el-input v-model="icon" style="width: 508px;" readonly placeholder="请选择菜单图标" clearable>
                        <template #prefix>
                            <tl-icon v-if="icon" :iconName="icon" :iconType="iconType"></tl-icon>
                            <el-icon v-else>
                                <Search />
                            </el-icon>
                        </template>
                    </el-input>
                </template>
                <el-tabs v-model="iconTabName">
                    <el-tab-pane label="Svg" name="Svg">
                        <svgSelect @iconActiveSelect="iconActiveSelect" :iconSelectName="icon">
                        </svgSelect>
                    </el-tab-pane>
                    <el-tab-pane label="element" name="element">
                        <elementIconSelect @iconActiveSelect="iconActiveSelect" :iconSelectName="icon">
                        </elementIconSelect>
                    </el-tab-pane>
                </el-tabs>
            </el-popover>
        </el-card>
    </div>
</template>

<script setup lang="ts">
const icon = ref('');
const iconType = ref('');
const iconTabName = ref('Svg');

const iconActiveSelect = (name: string, type: string) => {
    icon.value = name;
    iconType.value = type;
};
</script>

<style scoped lang="scss"></style>