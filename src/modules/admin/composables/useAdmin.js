import store from "@/store";
import { ref } from "vue";
import { useStore } from "vuex";

const useAdmin = () => {

  const buttonCreate = ref(false)
  const store = useStore()
  const userForm = ref({
    username: '',
    password: '',
    name: '',
    email: '',
    lastName: '',
    identification: null,
    checkIsAdmin: []
  })
  const messageFetch = ref('')
  const errorMessage = ref(false)

  const createUser = async () => {

    const resp = await store.dispatch('admin/createUser', userForm.value)

    buttonCreate.value = true
    if (resp.ok) {
      userForm.value = {}
      buttonCreate.value = false
    } else {
      buttonCreate.value = false
      errorMessage.value = true
      messageFetch.value = resp.message
    }

  }

  const editUser = async (data) => {
    await store.dispatch('admin/fetchEditUser', data)
  }

  const deleteUser = async (data) => {
    await store.dispatch('admin/fetchDeleteUser', data)
  }

  return {
    createUser,
    buttonCreate,
    buttonCreate,
    userForm,
    errorMessage,
    messageFetch,
    editUser,
    deleteUser
  }
}

export default useAdmin
