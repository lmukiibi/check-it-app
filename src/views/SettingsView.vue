<template>
    <div>
        <h2>Settings View</h2>
        <div class="paddings">
            <span>Salary: </span>
            <input v-model="salary" type="text" placeholder="150" />
            <span> - money</span>
        </div>
        <!-- <div class="paddings">
            <span>Break: </span>
            <input v-model="aBreak" type="text" placeholder="60" />
            <span> - minutes</span>
        </div> -->
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