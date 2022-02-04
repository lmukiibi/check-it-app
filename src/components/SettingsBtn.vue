<template>
    <button class="mySettingsBtn" @click="$router.push(settingsPage)" >
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
.mySettingsBtn {
    
    border-radius: 20%;
    background-color: white;
}
</style>