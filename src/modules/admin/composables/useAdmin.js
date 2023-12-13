import store from "@/store";
import { useStore } from "vuex";

const useAdmin = () => {

  const store = useStore()

  const createUser = async (userForm) => {

   const resp = await store.dispatch('user/createUser', userForm )

  }

  return {
    createUser
  }
}

export default useAdmin
