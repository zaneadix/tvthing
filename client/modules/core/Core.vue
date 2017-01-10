<template>
    
    <div class="page-grid">
        <Navigation></Navigation>
        <router-view></router-view>
    </div>

</template>

<script>

    import Navigation from './Navigation';
    
    export default {
        name: 'Core',
        components: {
            Navigation
        }
    }

</script>

<style lang="scss">
    
    @import 'bulma';
    @import './styles/layout';

</style>