import { defineStore } from 'pinia'

const url = 'https://kinopoiskapiunofficial.tech/api/v2.2'
// //мой ключ
const apiKey = '2585f9dc-d1e0-4fb9-89e7-7d5ee0b8391c'
// //второй ключ
// const apiKey = '4b48ab1e-61c3-4957-9b41-360c652b14ad'

const url2 = 'https://kinopoiskapiunofficial.tech/api/v1'

export const useMoviesStore = defineStore('moviesStore', {
  state: () => ({
    movies: [],
    premieres: [],
    actor: [],
  }),
  actions: {
    async getAllMovies() {
      await fetch(`${url}/films`, {
        method: 'GET',
        headers: {
          'X-API-KEY': apiKey,
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
      await fetch(`${url}/films?keyword=${searchText}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.movies = json.items
        })
        .catch((err) => console.log(err))
    },
    async getPremiers(month) {
      await fetch(`${url}/films/premieres?year=2024&month=${month}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.premieres = json.items
        })
        .catch((err) => console.log(err))
    },
    async getActor(id) {
      await fetch(`${url2}/staff/${id}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.actor = json
        })
        .catch((err) => console.log(err))
    },
  },
})
