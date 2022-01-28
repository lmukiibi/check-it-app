<template>
    <div>
        <div class="start">
            <LogInBtn @btn-click="toggle" 
            :color="inOut ? 'lightgreen' : 'pink'" class="button" :text="text"
             v-cloak/>
            <label class="date">{{ lastTime }}</label>
        </div>
        <div>
            <SettingsBtn />
        </div>
    </div>
</template>

<script>
import LogInBtn from '../components/LogInBtn.vue'
import SettingsBtn from '../components/SettingsBtn.vue'


export default {
    name: 'Start',
    props: {
        color: String,
        settings: Object
    },
    components: {
        LogInBtn,
        SettingsBtn,
    },
    data() {
        return {
            inOut: true,
            posts: [],
            lastTime: 'Time',
        }
    },
    methods: {
        async toggle() {
            await this.changeStatus()
            this.inOut = !this.inOut
            if (this.inOut) {
                this.text = 'IN'
                this.getTime('OUT')
            } else {
                this.text = 'OUT'
                this.getTime('IN')
            }
        },
        async getTime(state) {
            const date = new Date()
            const text = "" +
            date.getDate() + '/' +
            (date.getMonth()+1) + '/' +
            date.getFullYear() + ' ' +
            date.getHours() + ':' +
            date.getMinutes();
            await this.addTime(state, text)
            this.lastTime = text
        },
        async getStatus() {

            const res = await fetch('api/inOut')
            if (res.status !== 404) {

                const data = await res.json()
                return data
            }

            return true;
        }, 
        async getLatestLog() {
            const res = await fetch('api/posts')
            const data = await res.json()
            return data
        },
        async addTime(stateBefore, dateString) {
            const timeLog = {
                state: stateBefore,
                dateString: dateString
            }
            
            await fetch('api/posts', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(timeLog),
            })
        },
        async changeStatus() {
            const stat = await fetch('api/inOut')
            if (stat.status !== 404) {
                const data = await stat.json()
                const toggleStat = data.status
                const updStatus = {...stat, status: !toggleStat}

                await fetch('api/inOut', {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(updStatus)
                })
                
                return 'Success'
            }
            return 'Failed';
        }, 
        
    },
    
    async created() {
        const ans = await this.getStatus()
        this.posts = await this.getLatestLog()
        this.inOut = ans.status
        this.lastTime = Object.values(this.posts[this.posts.length - 1])[0] + ' '
        + Object.values(this.posts[this.posts.length - 1])[1]
        if (this.inOut) {
                this.text = 'IN'               
            } else {
                this.text = 'OUT'            
            }
        this.time = this.lastTime
         
    },

}
</script>

<style scoped>
.start {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.date {
    margin: 20px;
    font-weight: bold;
    font-size: 30px;
}


</style>