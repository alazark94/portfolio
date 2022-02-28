<template>
    <Link class="hover:underline" :class="{'underline': active}">
        <slot/>
    </Link>
</template>

<script setup>
defineProps({
    active: Boolean
})
</script>

<style scoped>

</style>
