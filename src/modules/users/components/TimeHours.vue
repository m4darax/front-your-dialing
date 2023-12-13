<template >
    <div>
        <div id="app" class="date-time-container">
            <div class="flex pt-3">
                <div class="date-time-item" id="year">Año: 2023 </div>
                <div class="date-time-item" id="day">Día: 20 </div>
                <div class="date-time-item" id="month">Mes: {{ someValue.hh }} </div>
            </div>
            <div class="flex pt-3">
                <div class="date-time-item" id="hour">Hora: {{ someValue.hh }} </div>
                <div class="date-time-item" id="minute">Minuto: {{ someValue.mm }} </div>
                <div class="date-time-item" id="second">Segundo: {{ someValue.ss }} </div>
            </div>
            <div class="flex flex-wrap align-items-center justify-content-center mt-4" style="max-width: 800px">
                <div class="flex align-items-center justify-content-center surface-200 font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">Entry</div>
                <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">Hour</div>
                <div class="flex align-items-center justify-content-center surface-200 font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">
                    <InputSwitch v-model="checked" />
                </div>
            </div>
            <div class="flex flex-wrap align-items-center justify-content-center mt-4" style="max-width: 800px">
                <div class="flex align-items-center justify-content-center surface-200 font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">Entry</div>
                <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">Hour</div>
                <div class="flex align-items-center justify-content-center surface-200 font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">
                    <InputSwitch v-model="checked" />
                </div>
            </div>
            <div class="flex flex-wrap align-items-center justify-content-center mt-4" style="max-width: 800px">
                <div class="flex align-items-center justify-content-center surface-200 font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">Entry</div>
                <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">Hour</div>
                <div class="flex align-items-center justify-content-center surface-200 font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">
                    <InputSwitch v-model="checked" />
                </div>
            </div>
            <div class="flex flex-wrap align-items-center justify-content-center mt-4" style="max-width: 800px">
                <div class="flex align-items-center justify-content-center surface-200 font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">Entry</div>
                <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">Hour</div>
                <div class="flex align-items-center justify-content-center surface-200 font-bold m-2 border-round"
                    style="min-width: 170px; min-height: 50px">
                    <InputSwitch v-model="checked" />
                </div>
            </div>

        </div>
    </div>
</template>
<script>

import InputSwitch from 'primevue/inputswitch';
import useUsers from '@/modules/users/composables/useUsers'
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'TimeHours',
    components: { InputSwitch },
    setup() {
        const store = useStore()
        const checked = ref(true);
        const { getTimeHour, moreSecondTimeFull } = useUsers()

        const someValue = computed(() => store.getters['user/hourTime']);

        onMounted(() => {
            getTimeHour()
            setInterval(() => {
                moreSecondTimeFull();
            }, 1000);
        });

        return {
            checked,
            someValue,
        }
    }

}
</script>
<style scoped>
.with-entrada {
    border: 1px solid red;
    margin: 0 0;
    width: 100px;
}

.date-time-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.date-time-item {
    margin: 5px;
    font-size: 40px;
    color: #333;
}

#year {
    color: #4285f4;
}

#day {
    color: #0f9d58;
}

#month {
    color: #db4437;
}

#hour {
    color: #f4b400;
}

#minute {
    color: #4285f4;
}

#second {
    color: #0f9d58;
}
</style>