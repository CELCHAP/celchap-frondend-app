import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard/Dashboard.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/connexion",
      name: "connexion",
      component: () => import("../views/connexion/Connexion.vue"),
      meta: {
        guest: true,
      },
    },
    {
      path: "/inscription",
      name: "inscription",
      component: () => import("../views/inscription/Inscription.vue"),
      meta: {
        guest: true,
      },
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("../views/articles/Articles.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/articles/detail/:id",
      name: "article-detail",
      component: () => import("../views/articles/ArticleDetail.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    // {
    //   path: "/commandes",
    //   name: "commandes",
    //   component: () => import("../views/commandes/Commandes.vue"),
    //   meta: {
    //     requiresAuth: true,
    //   },
    // },
    // {
    //   path: "/commandes/detail/:id",
    //   name: "detail-commande",
    //   component: () => import("../views/commandes/DetailCommande.vue"),
    //   meta: {
    //     requiresAuth: true,
    //   },
    // },
    // {
    //   path: "/compte",
    //   redirect: "/compte/profil",
    //   name: "compte",
    //   component: () => import("../views/compte/Compte.vue"),
    //   children: [
    //     {
    //       path: 'profil',
    //       component: () => import("../views/compte/Profil.vue"),
    //       meta: {
    //         requiresAuth: true,
    //       },
    //     },
    //     {
    //       path: 'boutique',
    //       component: () => import("../views/compte/InfoBoutique.vue"),
    //       meta: {
    //         requiresAuth: true,
    //       },
    //     },
    //     {
    //       path: 'identifiant',
    //       component: () => import("../views/compte/ChangePassword.vue"),
    //       meta: {
    //         requiresAuth: true,
    //       },
    //     },
    //   ],
    // },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("../views/404/Error404.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
  linkActiveClass: "cellchap-active-link",
});

// router.beforeEach((to, from, next) => {
//   // if route requires authentication - requiresAuth is true
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (localStorage.getItem('chap-access') == null) {
//       next({ name: 'connexion' });
//     } else {
//       next();
//     }
//   }
//   // if route can be accessed without authentication - guest is true 
//   // but we redirect back to dashboard if already logged in 
//   else if (to.matched.some((record) => record.meta.guest)) {
//     if (localStorage.getItem('chap-access')) {
//       next({ name: 'mes-boutiques' });
//     } else {
//       next();
//     }
//   }
//   // if not guest or requiresAuth continue
//   // e.g. about us page 
//   else {
//     next();
//   }
// });

router.afterEach((to, from) => {
  // this.$Progress.finish();
});

export default router;
