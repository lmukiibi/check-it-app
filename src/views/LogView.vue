<template>
    <div>
        <h2>Log View</h2>
        <GoBackBtn @go-back="goBack" />
        <ShowPosts />
        <GoBackBtn @go-back="goBack" />
    </div>
</template>

<script>
import GoBackBtn from '../components/GoBackBtn.vue'
import ShowPosts from '../components/ShowPosts.vue'

export default {
    name: 'LogView',
    components: {
        GoBackBtn,
        ShowPosts,
    },
    data () {
        return {
            previous: '/',
        }
    },
    methods: {
        goBack() {
            this.$router.push(this.previous)
        },
    },
    async created() {
    }
    
}
</script>

<style scoped>

</style>