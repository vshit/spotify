import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = new createRouter({
    routes: routes,
    history: createWebHistory(""),
});

export default router;
