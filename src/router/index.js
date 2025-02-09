import { createRouter, createWebHistory } from 'vue-router'
//import MovieDetailPage from '../components/pages/MovieDetailPage.vue'
import MainPage from '../components/pages/MainPage.vue'
import MoviesPage from '../components/pages/MoviesPage.vue'
import MovieDetailPage from '../components/pages/MovieDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/movies',
      component: MainPage,
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesPage,
    },
    {
      path: '/movies/:id',
      component: MovieDetailPage,
    }
  ],
})

export default router
