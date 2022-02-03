<template>
    <div>
        <div class="container">
            <h3><div class="containLog">
                <div class="itemId">{{ card.id }}</div>
                <div class="itemDate">{{ card.inValState }}:
                {{ card.inValYr }}/{{ card.inValMt }}/{{ card.inValDy }}</div>
                    <div class="itemTime"> {{ card.inValHr }}:{{ card.inValMn }} </div>
                    </div>
                </h3>
                <h3>{{ card.outValState }}:
                    {{ card.outValYr }}/{{ card.outValMt }}/{{ card.outValDy }}
                    {{ card.outValHr }}:{{ card.outValMn }}
                </h3>
                <h3>
                    Time working (h:m): {{ card.diffTime }}<br>
                    Money earned(£$): {{ card.money }}
                </h3>
                <!--
                <h3>{{ difference }}</h3>
                -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogCard',
    props: {
        card: Object
    },
    data() {
        return {
            theCard: []
            //difference: ''
        }
        
    },/*
    meethods: {
        calcDiff() {
            console.log('in LogCard')
            
            const outHr = this.card.outValHr
            const outMin = this.card.outValMn
            const inHr = this.card.outValHr
            const inMin = this.card.outValMn
            const hr = outHr - inHr
            const min = outMin - inMin
            console.log(hr + ':' + min)

            return (hr + ':' + min)
            
        }
    },*/
    created() {
        //this.theCard = this.card
        //this.calcDiff()
    }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-style: solid;
    border-radius: 5%;
    margin: 20px auto;
    max-width: 400px;
}
.containingLog {
    flex-direction: row;
}
.itemId {
    flex-grow: 1;
}
.itemDate {
    flex-grow: 2;
}
.itemTime {
    flex-grow: 1;
}
</style>