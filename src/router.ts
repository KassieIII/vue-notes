import { createRouter, createWebHashHistory } from "vue-router";

import NotesView from "./views/NotesView.vue";
import AboutView from "./views/AboutView.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: NotesView },
    { path: "/about", component: AboutView },
  ],
});
