<template>
    <div>
        <h1>Hello {{ $route.params.name }}</h1>
        <p>Welcome to the User Page!</p>
    </div>
</template>

<script>
export default {
    name: 'UserComponent'
}
</script>
