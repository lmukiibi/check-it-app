<template>
    <button @save-settings="$emit('save-settings', data)" class="myButton" @click="onSaveGoBack">Save / Go back</button>
</template>

<script>
export default {
    name: 'Go Back',
    props: {
    },
    methods: {
        onSaveGoBack() {
            this.$emit('go-back')
        }
    },
    data() {
        return {
            previousView: '/'
        }
    },
    emits: ['save-settings']
    

}
</script>

<style scoped>
.myButton {
    width: auto;
    margin: 10px auto;
    align-items: center;
    justify-content: center;
}
</style>