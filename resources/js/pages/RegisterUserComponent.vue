<template>
	<div>
		<section>
			<h1>Register new user</h1>

			<form
				@submit.prevent="handleSubmit"
				action="/users"
				method="post"
				class="main-input-group"
			>
				<div class="input-group">
					<label for="">Name</label>
					<input type="text" v-model="form.name" />
				</div>
				<div class="input-group">
					<label for="">Email</label>
					<input type="text" v-model="form.email" />
				</div>
				<div class="input-group">
					<label for="">Password</label>
					<input type="text" v-model="form.password" />
				</div>

				<button type="submit">Register</button>
				<!-- <button type="submit" @click="showToatSuccess()" class="btn btn-success">Register</button> -->
			</form>

			<router-link v-bind:to="{ name: 'User' }" class="nav-link active"
				>Back</router-link
			>
		</section>
	</div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
	name: "RegisterUserComponent",
	computed: {
		// Define the `isActive` method here
		isActive() {
			return (routeName) => {
				return this.$route.name === routeName;
			};
		},
	},
	data() {
		return {
			form: {
				name: "",
				email: "",
				password: "",
			},
		};
	},
	methods: {
		handleSubmit() {
			console.log(this.form);
			axios
				.post("/api/users", this.form)
				.then((response) => {
					if (response.data.status) {
						console.log(response);

						// Store the success message in localStorage
						localStorage.setItem("toastMessage", response.data.message);

						this.$router.push({
							name: "User",
						});
					}
				})
				.catch((error) => {
					console.log(error);
					// Check if the error is a duplicate entry
					if (
						error.response &&
						error.response.data &&
						error.response.data.message.includes("Duplicate entry")
					) {
						toast.error(
							"The email is already registered. Please use a different email.",
							{
								autoClose: 5000,
								position: toast.POSITION.TOP_RIGHT,
							}
						);
					} else {
						toast.error(
							"An error occurred during registration. Please try again.",
							{
								autoClose: 5000,
								position: toast.POSITION.TOP_RIGHT,
							}
						);
					}
				});
		},
	},
};
</script>

<style lang="scss">
.input-group {
	margin: 5px;
}

.main-input-group {
	margin-bottom: 20px;
}
</style>
