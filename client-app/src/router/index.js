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
         path: '/product/:slug/:code',
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

      // Toutes les routes de profil
      {
         path: '/ma-boutique',
         name: 'MyStore',
         component: () => import('../views/profiles/store.profile.vue'),
         meta: {
            requiresAuth: false,
         },
      },
      {
         path: '/mon-profile',
         name: 'MyProfile',
         component: () => import('../views/profiles/user.profile.vue'),
         meta: {
            requiresAuth: false,
         },
      },

      // Auth
      {
         path: '/sign-up',
         name: 'SignUp',
         component: () => import('../views/auth/sign-up.vue'),
         meta: {
            requiresAuth: false,
         },
      },

      {
         path: '/sign-in',
         name: 'SignIn',
         component: () => import('../views/auth/sign-in.vue'),
         meta: {
            requiresAuth: false,
         },
      },

      {
         path: '/sign-store',
         name: 'SignStore',
         component: () => import('../views/auth/sign-sotre.vue'),
         meta: {
            requiresAuth: true,
         },
      },

      {
         path: '/produit/all',
         name: 'ProductAll',
         component: () => import('../views/Home/products/product.all.vue'),
         meta: {
            requiresAuth: true,
         },
      },

      {
         path: '/store/produit/simple',
         name: 'StoreProduitSimple',
         component: () => import('../views/stores/store.vue'),
         meta: {
            requiresAuth: true,
         },
      },
      {
         path: '/store/all',
         name: 'StoreAll',
         component: () => import('../views/stores/store.all.vue'),
         meta: {
            requiresAuth: true,
         },
      },

      {
         path: '/store/view/:id',
         name: 'StoreView',
         component: () => import('../views/stores/store.view.vue'),
         meta: {
            requiresAuth: true,
         },
      },


      // Delivery
      {
         path: '/delivery/',
         name: 'Delivery',
         component: () => import('../views/delivery/index.delivery.vue'),
         meta: {
            requiresAuth: true,
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
      if (localStorage.getItem('access_token') == null) {
         next({ name: 'SignIn' });
      } else {
         next();
      }
   }
   // if route can be accessed without authentication - guest is true
   // but we redirect back to dashboard if already logged in
   else if (to.matched.some((record) => record.meta.guest)) {
      if (localStorage.getItem('access_token')) {
         next({ name: '/' });
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
