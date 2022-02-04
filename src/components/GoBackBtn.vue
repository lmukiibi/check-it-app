<template>
    <button class="myButton" @click="onClickGoBack">Go back</button>
</template>

<script>
export default {
    name: 'Go Back',
    props: {
    },
    methods: {
        onClickGoBack() {
            this.$emit('go-back')
        }
    },    

}
</script>

<style scoped>
.myButton {
    width: auto;
    margin: 10px auto;
    align-items: center;
    justify-content: center;
    border-radius: 20%;
    background-color: white;
}
</style>