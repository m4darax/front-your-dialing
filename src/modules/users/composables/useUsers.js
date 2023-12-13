import store from "@/store";
import { useStore } from "vuex";

const useUsers = () => {

  const getTimeHour = async () => {
   await store.dispatch('user/getTimeHour')
  }

  return {
    getTimeHour,
    moreSecondTimeFull: () => store.dispatch('user/saveFullTimeMoreSecond')
  }
}

export default useUsers
