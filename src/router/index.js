import Vue from "vue";
import VueRouter from "vue-router";
import ViewHome from "../views/ViewHome.vue";
import ViewLocations from "../views/ViewLocations.vue";
import ViewAboutUs from "../views/ViewAboutUs.vue";
import ViewFAQ from "../views/ViewFAQ.vue";
import ViewContactUs from "../views/ViewContactUs.vue";
import ViewPrivacyPolicy from "../views/ViewPrivacyPolicy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ViewHome,
  },
  {
    path: "/locations",
    name: "locations",
    component: ViewLocations,
  },
  {
    path: "/about",
    name: "about",
    component: ViewAboutUs,
  },
  {
    path: "/faq",
    name: "faq",
    component: ViewFAQ,
  },
  {
    path: "/contact",
    name: "contact",
    component: ViewContactUs,
  },
  {
    path: "/privacypolicy",
    name: "privacypolicy",
    component: ViewPrivacyPolicy,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
