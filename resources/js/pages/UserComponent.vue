<template>
    <div>
        <section>
            <h1>Daftar User</h1>
            <ul>
                <li v-for="user in users">
                    <!-- <router-link v-bind:to="profile_url(user.name)">{{user.name}}</router-link> -->
                    <a href="" @click.prevent="lihatuser(user.id)">{{
                        user.name
                    }}</a>
                </li>
            </ul>
        </section>
        <p>Welcome to the User Page!</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "UserComponent",
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        getUsers() {
            axios.get("/api/users").then((response) => {
                console.log(response);
                this.users = response.data;
            });
        },
        profile_url(name) {
            return "/user/" + name.toLowerCase();
        },
        lihatuser(id) {
            this.$router.push({
                name: "Profile",
                params: { id },
            });
        },
    },
};
</script>
