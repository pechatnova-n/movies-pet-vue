import { createRouter, createWebHistory } from 'vue-router'
import PremiersPage from '/src/pages/PremiersPage.vue'
import MoviesPage from '/src/pages/MoviesPage.vue'
import MovieDetailPage from '/src/pages/MovieDetailPage.vue'
import ActorsPage from '/src/pages/ActorsPage.vue'
import NotFoundPage from '/src/pages/NotFoundPage.vue'
import ContactsPage from '/src/pages/ContactsPage.vue'
import ActorFilms from '@/features/actors/ActorFilms.vue'
import ActorPersonalLife from '@/features/actors/ActorPersonalLife.vue'
import ActorFacts from '@/features/actors/ActorFacts.vue'
import InformationPage from '@/pages/InformationPage.vue'

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
    {
      path: '/information',
      name: 'information',
      component: InformationPage
    },
  ],
})

export default router
