<template>
    <button class="myLogBtn" @click="$router.push(logView)">Logs</button>
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
.myLogBtn {
    
    border-radius: 20%;
    background-color: white;
}

</style>