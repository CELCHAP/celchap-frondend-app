import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueProgressBar from "@aacassandra/vue3-progressbar";
import VueFeather from 'vue-feather';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css '      //theme
import 'primevue/resources/primevue.min.css      '           //core css
import 'primeicons/primeicons.css'
import router from "./router";

const app = createApp(App)

// option pour la bar de progression lors du chargement des pages
const options = {
  color: "#fb6b00",
  failedColor: "#dc2626",
  thickness: "3px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

app.use(router);
app.use(VueProgressBar, options);
app.use(PrimeVue);
app.component(VueFeather.name, VueFeather);

app.mount('#app')
