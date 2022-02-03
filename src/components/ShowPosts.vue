<template>
    <div>
        <!--
        <div :key=pos.id v-for="pos in posts">
            <h3>{{ pos.id }}: {{ pos.dateString }} {{ pos.state }} </h3>
        </div>
        -->
        <!--
        <div :key=pos.id v-for="pos in handledLogs">
            <h3>{{ pos.id }} - {{ pos.inValState }}: {{ pos.inValYr }}/{{ pos.inValMt }}/{{ pos.inValDy }}
                 {{ pos.inValHr }}:{{ pos.inValMn }}
            </h3>
            <h3>{{ pos.outValState }}: {{ pos.outValYr }}/{{ pos.outValMt }}/{{ pos.outValDy }}
                 {{ pos.outValHr }}:{{ pos.outValMn }}
            </h3>
        </div>
        -->
        <div :key=card.id v-for="card in handledLogs">
            <LogCard :card="card" />


        </div>
    </div>
</template>

<script>
    import LogCard from './LogCard.vue'

export default {
    name: 'ShowPosts',
    props: {
    },
    components: {
        LogCard,
    },
    data() {
        return {
            posts: [],
            handledLogs: [],
            salary: 0,
            aBreak: 0,
        }
    },
    methods: {
        async getAllLogs() {
            const res = await fetch('api/posts')
            const data = await res.json()
            return data
        },
        async getSettings() {
            const res = await fetch('api/settings')
            const data = await res.json()
            this.salary = data.salary
            this.aBreak = data.aBreak
        },
        stringToArray(val) {
            var inDateNoChar = val.dateString.split('/')
            var tempSplit = inDateNoChar[2].split(' ')
            inDateNoChar[2] = tempSplit[0]
            var tempHrMin = tempSplit[1].split(':')
            var tHr = tempHrMin[0]
            var tMin = tempHrMin[1]
            inDateNoChar = inDateNoChar.concat(tHr)
            inDateNoChar = inDateNoChar.concat(tMin)

            return inDateNoChar
        },
        getWorkTime(inHr, outHr, inMin, outMin) {
            let hourLess = false
            let breakAdded = false
            let resMin = outMin - inMin
            if (resMin < 0) {
                resMin += 60
                hourLess = true
            }
            let resHr = outHr - inHr
            if (hourLess) {
                resHr--
                hourLess = false
            }
            if (resHr < 0) {
                resHr += 24
            }
            breakAdded
            console.log('difference: ' + resHr + ':' + resMin)
            if (resHr >= 3 && resMin >= 30) {
                breakAdded = true
                resMin -= this.aBreak   
            }
            if (resMin < 0) {
                resMin += 60
                hourLess = true
            }
            if (hourLess) {                   
                resHr--
                hourLess = false
            }
            if (resHr < 0) {
                resHr += 24
            }
            return resHr + ':' + resMin
        },
        getMoneyEarned(time) {
            console.log('time: ' + time)
            const timeArr = time.split(':')
            let timeInMinutes = parseFloat(timeArr[0]) * 60 + parseFloat(timeArr[1])
            console.log('time in minutes: ' + timeInMinutes)
            const money = this.salary * timeInMinutes / 60
            console.log('my money returning: ' + money)
            return money.toFixed(2)
        },
        calculateValues(inValue, outValue, count) {
            inValue
            outValue
            console.log('We are in the calcValue method: ' 
            + inValue.state + ', ' + outValue.state)

            const inArr = this.stringToArray(inValue)
            const outArr = this.stringToArray(outValue)

            const diffTime = this.getWorkTime(inArr[3], outArr[3], inArr[4], outArr[4])
            const money = this.getMoneyEarned(diffTime)
            console.log('my money out: ' + money)
            const newInOutLog = {

                id: count,
                inValState: inValue.state,
                inValDy: inArr[0],
                inValMt: inArr[1],
                inValYr: inArr[2],
                inValHr: inArr[3],
                inValMn: inArr[4],
                outValState: outValue.state,
                outValDy: outArr[0],
                outValMt: outArr[1],
                outValYr: outArr[2],
                outValHr: outArr[3],
                outValMn: outArr[4],
                diffTime: diffTime,
                money: money
            }

            
            this.handledLogs = this.handledLogs.concat(newInOutLog)


            // A method that gets the settings, add it to the new InOutLog
            // and in the LogCard component, add the total ammount of money nicelly.

        },
        
        addToHandleLog(pos) {

            var cou = 1
            var firstOUT = false
            if (pos.length >= 2) {
                for (let i = 0; i < (pos.length); i++) {
                    console.log('Array slot: ' + (pos[i].id - 1) + ' step ' + (i+1))
                    console.log('state: ' + pos[i].state)
                    
                    if (pos[0].state === 'OUT' && i === 0) {
                        console.log('First is an OUT')
                        firstOUT = true
                        console.log(String(firstOUT))
                    }
                    else if (i === (pos.length - 1)) {
                        console.log('Last is an IN')
                    }
                    else {
                        console.log('In the logic part. Id: ' + pos[i].id + ', state: '
                        + pos[i].state)
                        if ((i + 1) < pos.length) {
                            console.log('We are in')
                            this.calculateValues(pos[i], pos[(i + 1)], (cou))
                            i++
                            cou++
                        }

                    }
                    console.log(' ')
                }
            }
        }
    },
    async created() {
        this.posts = await this.getAllLogs()
        await this.getSettings()
        console.log('Salary: ' + this.salary)
        console.log('Break: ' + this.aBreak)
        this.addToHandleLog(this.posts)
    }
    
}
</script>

<style scoped>

</style>