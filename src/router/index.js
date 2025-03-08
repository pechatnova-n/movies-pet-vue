import { createRouter, createWebHistory } from 'vue-router'
import PremiersPage from '../components/pages/PremiersPage.vue'
import MoviesPage from '../components/pages/MoviesPage.vue'
import MovieDetailPage from '../components/pages/MovieDetailPage.vue'
import ActorsPage from '../components/pages/ActorsPage.vue'
import NotFoundPage from '../components/pages/NotFoundPage.vue'
import ContactsPage from '../components/pages/ContactsPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/premiers',
      name: 'premiers',
      component: PremiersPage,
    },
    {
      path: '/',
      name: 'index',
      component: MoviesPage,
    },
    {
      path: '/movies',
      name: 'movies',
      redirect: { name: 'index' },
    },
    {
      path: '/movies/:id',
      component: MovieDetailPage,
    },
    {
      name: 'actors',
      path: '/actors',
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
    },
  ],
})

export default router
