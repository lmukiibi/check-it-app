<template>
    <div>
        <h2>Settings View</h2>
        <div class="paddings">
            <label>Salary: </label>
            <input v-model="salary" type="text" placeholder="150" />
            <label> - money</label>
        </div>
        <div class="paddings">
            <label>Break: </label>
            <input v-model="aBreak" type="text" placeholder="60" />
            <label> - minutes</label>
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

            const newSettings = {
                salary: this.salary,
                aBreak: this.aBreak
            }

            await fetch('api/settings', {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newSettings)
            })

            this.$router.push(this.previousView)
        },
        async getSettings() {
            const res = await fetch('api/settings')
            const data = await res.json()

            this.salary = data.salary
            this.aBreak = data.aBreak
        },
    },
    async created() {
        await this.getSettings()
    }
    
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