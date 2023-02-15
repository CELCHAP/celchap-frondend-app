import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueProgressBar from "@aacassandra/vue3-progressbar";
// import VueRouter from 'vue-router'
import router from "./router";

const app = createApp(App)

// option pour la bar de progression lors du chargement des pages
const options = {
  color: "#f97316",
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

// app.use(VueRouter)
app.use(router);
app.use(VueProgressBar, options);

app.mount('#app')
