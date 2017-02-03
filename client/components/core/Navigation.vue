<template>
    
    <nav class="nav">
        <div class="container">
            <div class="nav-left">
            <router-link to="/" class="nav-item">TV Thing</router-link>
            </div>
            
            <div class="nav-right nav-menu">
                <router-link to="/shows" class="nav-item">Shows</router-link>
                <router-link to="/sign-up" class="nav-item">Sign Up</router-link>
            </div>
        </div>
    </nav>

</template>

<script>
    
    export default {
        name: 'Navigation'
    }

</script>