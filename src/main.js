import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import "primevue/resources/themes/lara-light-green/theme.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Button", Button);
app.mount("#app");
