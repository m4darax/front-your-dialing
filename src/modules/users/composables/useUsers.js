import store from "@/store";
import { ref } from "vue";
import { useStore } from "vuex";

const useUsers = () => {


  const getTimeHour = async () => {
    await store.dispatch('user/getTimeHour')
  }

  const useConsumeApiSaveRecord = async () => {
    await store.dispatch('user/consumeApiSaveRecord')
  }

  const checkDialing = ref({
    checkIncome: false,
    checkRefreshmentsF: false,
    checkReturnRefreshmentsF: false,
    checkOutputF: false
  })

  const checkDiabled = ref({
    checkIncome: false,
    checkRefreshmentsF: false,
    checkReturnRefreshmentsF: false,
    checkOutputF: false
  })

  const validateCheckDisabled = (dialing) => {
    checkDiabled.value.checkIncome = dialing.value?.pendingType ? true : false
    checkDiabled.value.checkRefreshmentsF = dialing.value?.pendingType == "sr" ? false : true
    checkDiabled.value.checkReturnRefreshmentsF = dialing.value?.pendingType == "rr" ? false : true
    checkDiabled.value.checkOutputF = dialing.value?.pendingType == "s" ? false : true
  }

  const validateCheck = (dialing) => {
    checkDialing.value.checkIncome = dialing.value?.incomeF ? true : false
    checkDialing.value.checkRefreshmentsF = dialing.value?.refreshmentsF ? true : false
    checkDialing.value.checkReturnRefreshmentsF = dialing.value?.returnRefreshmentsF ? true : false
    checkDialing.value.checkOutputF = dialing.value?.outputF ? true : false
  }

  const fetchSaveRecord = async () => {
    await store.dispatch('user/fetchSaveRecord')
    await store.dispatch('user/consumeApiSaveRecord')
  }


  return {
    getTimeHour,
    moreSecondTimeFull: () => store.dispatch('user/saveFullTimeMoreSecond'),
    useConsumeApiSaveRecord,
    checkDiabled,
    checkDialing,
    validateCheckDisabled,
    validateCheck,
    fetchSaveRecord
  }
}

export default useUsers
