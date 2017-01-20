
<template>
    
    <div>
        
        <p>{{show.overview}}</p>

    </div>

</template>


<script>

    import { mapActions, mapState } from 'vuex';
    
    export default {

        
        name: 'Overview',

        computed: {
            ...mapState({
                show: function (state) {
                    return state.show.details[this.$route.params.id]
                }
            })
        },
    }

</script>
