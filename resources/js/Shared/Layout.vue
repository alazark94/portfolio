<template>
    <section class="bg-gray-200 py-6 px-40">
        <header class="flex justify-between">
            <div class="flex items-center">
                <h1 class="text-lg font-bold">AK</h1>
                <p class="leading-loose text-gray-800">Bringing Ideas to Reality</p>
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
