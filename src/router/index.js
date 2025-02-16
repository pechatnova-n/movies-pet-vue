import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/pages/MainPage.vue'
import MoviesPage from '../components/pages/MoviesPage.vue'
import MovieDetailPage from '../components/pages/MovieDetailPage.vue'
import ActorsPage from '../components/pages/ActorsPage.vue'
import NotFoundPage from '../components/pages/NotFoundPage.vue'
import ContactsPage from '../components/pages/ContactsPage.vue'

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
    },
    {
      path: '/actors',
      name: 'actors',
      component: ActorsPage,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage,
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: NotFoundPage,
    }
  ],
})

export default router
