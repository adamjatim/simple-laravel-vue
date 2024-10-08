<template>
    <div>
        <section v-if="id">
            <h1>Hello {{ detailUser.name }}</h1>
            <p>Email : <strong>{{ detailUser.email }}</strong></p>
            <router-link
                v-bind:to="{ name: 'User' }"
                :class="isActive('User') || isActive('Profile') ? 'active' : ''"
                class="nav-link"
                >Back</router-link
            >
        </section>
        <p>Welcome to the User Page!</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ["id"],
    name: "ProfileComponent",
    data() {
        return {
            detailUser: {},
        };
    },
    mounted() {
        this.getUser();
    },
    methods: {
        getUser() {
            axios.get("/api/users/" + this.id).then((response) => {
                console.log(response);
                this.detailUser = response.data;
            });
        },
    },
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
