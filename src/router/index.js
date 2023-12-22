import { createRouter, createWebHashHistory } from "vue-router";
import userRouter from '@/modules/users/router'
import authRouter from '@/modules/auth/router'
import adminRouter from '@/modules/admin/router'
import {isAuthenticatedGuardAdmin, validateAuth, isAuthenticatedUser} from "@/modules/auth/router/auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/auth",
  },
  {
    path:'/auth',
    beforeEnter: [ validateAuth ],
    ...authRouter
  },
  {
    path:'/admin',
    beforeEnter: [ isAuthenticatedGuardAdmin ],
    ...adminRouter
  },
  {
    path:'/user',
    beforeEnter: [ isAuthenticatedUser ],
    ...userRouter
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/auth"
},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
