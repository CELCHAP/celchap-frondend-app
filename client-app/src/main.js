import { createApp } from 'vue';
import './style.css';
import 'remixicon/fonts/remixicon.css'
import VueLazyLoad from 'vue3-lazyload';
import App from './App.vue';
import router from './router';
import { setAuth } from './services/setAuthentificate';

setAuth()
const app = createApp(App);
app.use(VueLazyLoad, {
    loading: '/placeholder/placeholder-image.png',
    error: '/placeholder/placeholder-image.png',
 });
app.use(router);


app.mount('#app');
