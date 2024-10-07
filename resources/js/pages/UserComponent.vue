<template>
    <div>
        <section v-if="username">
            <h1>Hello {{ username }}</h1>
            <router-link v-bind:to="{ name: 'User' }">Back</router-link>
        </section>
        <section v-else>
            <h1>Daftar User</h1>
            <ul>
                <li v-for="user in users">
                    <!-- <router-link v-bind:to="profile_url(user.name)">{{user.name}}</router-link> -->
                    <a href="" @click.prevent="lihatuser(user.name)">{{
                        user.name
                    }}</a>
                </li>
            </ul>
        </section>
        <p>Welcome to the User Page!</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ["username"],
    name: "UserComponent",
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        axios.get('/api/users').then((response) => {
            console.log(response);
            this.users = response.data
        })
    },
    methods: {
        profile_url(name) {
            return "/user/" + name.toLowerCase();
        },
        lihatuser(name) {
            // this.$router.push('/user/' +name.toLowerCase())
            this.$router.push({
                name: "User",
                params: { username: name.toLowerCase() },
            });
        },
    },
};
</script>
