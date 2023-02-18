import { createApp } from "vue";
import "./style/index.scss";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css'
import pinia from "./store";
import router from "./router";

const vuetify = createVuetify({
    components,
    directives,
});
const app = createApp(App);

// use
app.use(vuetify);
app.use(pinia);
app.use(router);

app.mount("#app");
