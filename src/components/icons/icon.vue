<template>
    <svg-icon v-if="prop.iconType == 'svg'" :iconClass="prop.iconName" className="icon"></svg-icon>
    <component class="commonIconClass" :is="prop.iconName" v-else></component>
</template>

<script setup lang="ts">
type propType = {
    iconName?: string;
    iconType?: string;
}
const prop = withDefaults(defineProps<propType>(), {
    iconName: '',
    iconType: ''
})
</script>

<style scoped lang="scss"></style>