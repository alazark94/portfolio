<template>
    <nav>
        <ul class="flex space-x-4 ml-6 list-inside">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'" >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink href="/about" :active="$page.component === 'About'" >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink href="/contact" :active="$page.component === 'Contact'" >
                    Contact
                </NavLink>
            </li>
        </ul>
    </nav>
</template>

<script>
import NavLink from "./NavLink";
export default {
    name: "Nav",
    components: {NavLink}
}
</script>

<style scoped>

</style>
