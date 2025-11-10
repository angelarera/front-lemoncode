import { createRouter, createWebHistory } from 'vue-router'
import { HomePage, FavouritesPage } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: 'edit/:id',
          name: 'edit',
          component: () => import('@/components/MealModal.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesPage,
    },
  ],
})

export default router
