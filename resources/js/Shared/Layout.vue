<template>
    <section class="bg-gray-200 py-4 px-40">
        <header class="flex justify-between">
            <div class="flex items-center space-x-3">
                <Link href="/" class="text-3xl font-bold">AK</Link>
                <p class="leading-loose text-gray-800 text-sm">Bringing Ideas to Reality</p>
            </div>
            <Nav />
        </header>
    </section>
    <section class="p-6">
        <div class="mx-auto max-w-3xl">
            <slot/>
        </div>
    </section>
</template>

<script setup>
import Nav from "./Nav";
</script>

<style scoped>

</style>
