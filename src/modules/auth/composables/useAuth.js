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
    if (resp.ok) {

      if (store.state.auth.isAdmin) {
        router.push({ name: 'admin-users' })
      } else {
        router.push({ name: 'users' })
      }
    } else {
      visible.value = true;
    }

  }

  const checkAuthStatus = async () => {
    const resp = await store.dispatch('auth/checkAuthStatus')
    return resp;
  }

  return {
    dataForm,
    getLogin,
    visible,
    checkAuthStatus
  }
}
