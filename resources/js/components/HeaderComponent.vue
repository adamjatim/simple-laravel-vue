<template>
  <nav>
    <router-link v-bind:to="{ name: 'Home' }" class="nav-link">Home</router-link>
    <router-link v-bind:to="{ name: 'About' }" class="nav-link">About</router-link>
    <router-link v-bind:to="{ name: 'User' }" class="nav-link">User</router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
