<template>
    <button @click="onClick()" 
    :style="{background: color }" 
    class="logInBtn">Check {{ text }}</button>
</template>

<script>
export default {
    name: 'LogInBtn',
    props: {
        color: String,
        text: {
            type: String,
            default: 'IN'
        }
    },
    methods: {
        onClick() {
            this.$emit('btn-click')
        }
    }


}
</script>

<style scope>
.logInBtn {
    font-family: Impact;
    font-size: large;
    height: 200px;
    width: 200px;
    border-radius: 50%
}
</style>