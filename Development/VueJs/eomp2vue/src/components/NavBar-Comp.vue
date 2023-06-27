<template>
    <nav class="topnav">
        <router-link to="/" id="nav-item">Home</router-link>
        <router-link to="/" id="nav-item">About</router-link>
        <router-link to="/" id="nav-item">Contact</router-link>
        <router-link to="/" id="nav-item">Products</router-link>
        <router-link to="/" id="nav-item">Admin</router-link>
        <router-link to="/" id="nav-item">Cart</router-link>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.topnav{
    background-color: black;
    overflow: hidden;
}

.topnav{
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
}

#nav-item {
    border: 2px solid white;
    border-radius: 12px;
    color: white;
    padding: 20px;
    text-decoration: none;
}

</style>