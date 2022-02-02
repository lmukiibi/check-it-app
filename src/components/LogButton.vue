<template>
    <button @click="$router.push(logView)">Logs</button>
</template>

<script>
export default {
    name: 'LogButton',
    data () {
        return {
            logView: './LogView'
        }
    }
    
}
</script>

<style scoped>

</style>