<template>
    <button @click="$router.push(settingsPage)" >
            Settings
    </button>   
</template>

<script>
export default {
    name: 'SettingsButton',
    data() {
        return {
            settingsPage: '/SettingsView'
        }
    }
    
}
</script>

<style>

</style>