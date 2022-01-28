<template>
    <button @click="$router.push('/SettingsView')" >
            Settings
    </button>   
</template>

<script>
export default {
    name: 'SettingsButton',
    props: {
        logs: []
    },
    methods: {
        settingsView() {

        }
    },
    data() {
        return {
            settingsPage: '/SettingsView'
        }
    }
    
}
</script>

<style>

</style>