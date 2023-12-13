import { apiDialing } from "@/api/apiDialing";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export const useAuth = () => {

    const router = useRouter()
    const store = useStore()

    const dataForm = ref({
        username: '',
        password: ''
    })
    const visible = ref(false);

    const getLogin = async () => {
        const resp = await store.dispatch('auth/getToken', dataForm.value)
        if ( resp.ok ) {
          router.push({name: 'admin-users'})
        } else {
          visible.value = true;
        }
        
    }

    const checkAuthStatus = () => {
      const token = localStorage.getItem('idToken')
      const username = localStorage.getItem('username')
      if ( token && username ) {
        store.dispatch('auth/checkAuthStatus', {token, username})
        return { ok: true}
      } else {
        return { ok: false}
      }
    }

  return {
    dataForm,
    getLogin,
    visible,
    checkAuthStatus
  }
}
