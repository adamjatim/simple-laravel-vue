<template>
  <div>
    <section v-if="username">
      <h1>Hello {{ username }}</h1>
      <router-link v-bind:to="{name: 'User'}">Back</router-link>
    </section>
    <section v-else>
      <h1>Daftar User</h1>
      <ul>
        <li v-for="user in users">
            <!-- <router-link v-bind:to="profile_url(user.name)">{{user.name}}</router-link> -->
             <a href="" @click.prevent="lihatuser(user.name)">{{ user.name }}</a>
        </li>
      </ul>
    </section>
    <p>Welcome to the User Page!</p>
  </div>
</template>

<script>
export default {
  props: ["username"],
  name: "UserComponent",
  data() {
    return {
      users: [
        { id: 1, name: "Rahmat" },
        { id: 2, name: "Mada" },
        { id: 3, name: "Rama" },
        { id: 4, name: "Ari" },
      ],
    };
  },
  methods: {
    profile_url(name) {

      return '/user/' +name.toLowerCase()
    },
    lihatuser(name) {
      // this.$router.push('/user/' +name.toLowerCase())
      this.$router.push({
        name: 'User',
        params: {username: name.toLowerCase()}
      })
    }
  }
};
</script>
