<template>
    <nav>
        <router-link
            v-bind:to="{ name: 'Home' }"
            :class="isActive('Home') ? 'active' : ''"
            class="nav-link"
            >Home</router-link
        >

        <router-link
            v-bind:to="{ name: 'About' }"
            :class="isActive('About') ? 'active' : ''"
            class="nav-link"
            >About</router-link
        >

        <router-link
            v-bind:to="{ name: 'User' }"
            :class="isActive('User') || isActive('Profile') ? 'active' : ''"
            class="nav-link"
            >User</router-link
        >
    </nav>
</template>

<script>
export default {
    name: "HeaderComponent",
    computed: {
        // A method to check the currently active route
        isActive() {
            return (routeName) => {
                // Check if the current route matches the given route name
                return this.$route.name === routeName;
            };
        },
    },
};
</script>
