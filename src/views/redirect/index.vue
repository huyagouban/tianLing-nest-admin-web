<template>
    <div>

    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const toPage = () => {
    router.replace({ path:'/'+ route.params.path })

}
onMounted(() => {
    toPage()
})
</script>

<style scoped></style>