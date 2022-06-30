import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)

// provide window variable
app.provide('BMapGL', window.BMapGL)
app.provide('BMapGLLib', window.BMapGLLib)

app.mount('#app')


