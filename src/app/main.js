import '/src/shared/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '/src/app/App.vue'
import router from '/src/app/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
