<template>
    <div>
        <h2>Settings View</h2>
        <div class="paddings">
            <label>Salary: </label>
            <input v-model="salary" type="text" />
        </div>
        <div class="paddings">
            <label>Break: </label>
            <input v-model="aBreak" type="text" />
        </div>
            <GoBackBtn @go-back="onSubmit" />
    </div>
</template>

<script>
import GoBackBtn from '../components/GoBackBtn.vue'

export default {
    name: 'SettingsView',
    props: {

    },
    components: {
        GoBackBtn,
    },
    data() {
        return {
            salary: '',
            aBreak: '',
            previousView: '/'
        }
    },
    methods: {
        async onSubmit() {
            const set = await fetch('api/settings')

            const newSettings = {
                salary: this.salary,
                aBreak: this.aBreak
            }
            const updSettings = {...set, settings: newSettings}

            await fetch('api/settings', {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updSettings)
            })

            this.$router.push(this.previousView)
        },
    },
    
}
</script>

<style>
.paddings {
    padding: 5px 0px;
    margin: 5px;
    justify-content: center;
    display: flex;
    flex-direction: row;
}
</style>