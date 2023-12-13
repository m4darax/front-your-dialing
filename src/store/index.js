import adminModule from "@/modules/admin/store";
import authModule from "@/modules/auth/store/auth";
import userModule from "@/modules/users/store";
import { createStore } from "vuex";

export default createStore({
  modules: {
    auth: authModule,
    user: userModule,
    admin: adminModule
  }
});
