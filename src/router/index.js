import { createRouter, createWebHistory } from 'vue-router'
import PremiersPage from '../components/pages/PremiersPage.vue'
import MoviesPage from '../components/pages/MoviesPage.vue'
import MovieDetailPage from '../components/pages/MovieDetailPage.vue'
import ActorsPage from '../components/pages/ActorsPage.vue'
import NotFoundPage from '../components/pages/NotFoundPage.vue'
import ContactsPage from '../components/pages/ContactsPage.vue'
import ActorFilms from '@/components/ActorFilms.vue'
import ActorPersonalLife from '@/components/ActorPersonalLife.vue'
import ActorFacts from '@/components/ActorFacts.vue'

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
      path: '/actors/:id',
      component: ActorsPage,
      redirect: { name: 'films' },
      children: [
        {
          path: 'films',
          component: ActorFilms,
          name: 'films',
        },
        {
          path: 'personal-life',
          component: ActorPersonalLife,
          name: 'personal-life',
        },
        {
          path: 'facts',
          component: ActorFacts,
          name: 'facts',
        },
      ],
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
