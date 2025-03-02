import { defineStore } from 'pinia'

const url = 'https://kinopoiskapiunofficial.tech/api/v2.2'

export const useMoviesStore = defineStore('moviesStore', {
  state: () => ({
    movies: [],
    premieres: [],
  }),
  actions: {
    async getAllMovies() {
      await fetch(`${url}/films`, {
        method: 'GET',
        headers: {
          'X-API-KEY': '2585f9dc-d1e0-4fb9-89e7-7d5ee0b8391c',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log('store', json.items)
          this.movies = json.items
        })
        .catch((err) => console.log(err))
    },
    async findMovie(searchText) {
      console.log('найти фильм')
      await fetch(`${url}/films?keyword=${searchText}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': '2585f9dc-d1e0-4fb9-89e7-7d5ee0b8391c',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log('поиск', json.items)
          this.movies = json.items
        })
        .catch((err) => console.log(err))
    },
    async getPremiers(month) {
      console.log('найти фильм')
      await fetch(`${url}/films/premieres?year=2024&month=${month}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': '2585f9dc-d1e0-4fb9-89e7-7d5ee0b8391c',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log('поиск', json.items)
          this.premieres = json.items
        })
        .catch((err) => console.log(err))
    },
  },
})
