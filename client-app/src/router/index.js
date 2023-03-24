import {
   createRouter,
   createWebHistory,
   createWebHashHistory,
} from 'vue-router';

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [

      // Produit
      {
         path: '/',
         name: 'Home',
         component: () => import('../views/Home/products/index.product.vue'),
         meta: {
            requiresAuth: false,
         },
      },
      {
         path: '/product/:slug',
         name: 'DetailProduct',
         component: () => import('../views/Home/products/detail.product.vue'),
         meta: {
            requiresAuth: false,
         },
      },

      // Categorie
      {
         path: '/category',
         name: 'Category',
         component: () => import('../views/Categories/categorie.all.vue'),
         meta: {
            requiresAuth: false,
         },
      },
      {
         path: '/category/:slug',
         name: 'CategorySpecifiqueAll',
         component: () => import('../views/Categories/categorie.single.vue'),
         meta: {
            requiresAuth: false,
         },
      },



      // Produit

      {
         path: '/boutique',
         name: 'Store',
         component: () => import('../views/Home/stores/index.store.vue'),
         meta: {
            requiresAuth: false,
         },
      },

      // Toutes les routes de recherche
      {
         path: '/recherche',
         name: 'Search',
         component: () => import('../views/Search/index.search.vue'),
         meta: {
            requiresAuth: false,
         },
      },

      // Toutes les routes de Panier
      {
         path: '/basket',
         name: 'Basket',
         component: () => import('../views/Basket/index.basket.vue'),
         meta: {
            requiresAuth: false,
         },
      },

      // Toutes les routes de My store
      {
         path: '/ma-boutique',
         name: 'MyStore',
         component: () => import('../views/Home/index.home.vue'),
         meta: {
            requiresAuth: false,
         },
      },

      {
         // the 404 route, when none of the above matches
         path: '/404',
         name: '404',
         component: () => import('../views/404/Error404.vue'),
      },
      {
         path: '/:pathMatch(.*)*',
         redirect: '/404',
      },
   ],
   linkActiveClass: 'cellchap-active-link',
});

router.beforeEach((to, from, next) => {
   // if route requires authentication - requiresAuth is true
   if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (localStorage.getItem('chap-access') == null) {
         next({ name: 'connexion' });
      } else {
         next();
      }
   }
   // if route can be accessed without authentication - guest is true
   // but we redirect back to dashboard if already logged in
   else if (to.matched.some((record) => record.meta.guest)) {
      if (localStorage.getItem('chap-access')) {
         next({ name: 'mes-boutiques' });
      } else {
         next();
      }
   }
   // if not guest or requiresAuth continue
   // e.g. about us page
   else {
      next();
   }
});

router.afterEach((to, from) => {
   // this.$Progress.finish();
});

export default router;
