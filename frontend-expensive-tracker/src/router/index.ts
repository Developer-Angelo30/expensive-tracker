import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/Index.vue')
    },
    {
      path: '/sign-up',
      component: () => import('@/components/registration-components/Registration-Holder.vue'),
      children: [
        {
          path: '',
          component: ()=>import('@/components/Registration.vue') 
        },
        {
          path: 'otp-verification',
          component: ()=>import('@/components/registration-components/Otp.vue')
        },
        {
          path: 'verified',
          component: ()=>import('@/components/registration-components/Verified.vue')
        }
      ]
    }
  ]
})

export default router
