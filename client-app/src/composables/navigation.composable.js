import { computed, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export const useNavigationComposable = () => {
   // Gestion des routes en variable
   const route = useRoute();

   // Donnee du menu footer
   const MenuFooter = reactive([
      {
         name: 'Accueil',
         link: 'Home',
         icon: 'ri-home-fill',
         isAIcon: 'ri-home-fill',
         actived: true,
      },
      {
         name: 'Recherche',
         link: 'Search',
         icon: 'ri-search-2-fill',
         isAIcon: 'ri-search-2-fill',
         actived: false,
      },
      {
         name: 'Livraisons',
         link: 'Delivery',
         icon: 'ri-truck-fill',
         isAIcon: 'ri-truck-fill',
         actived: false,
      },
      {
         name: 'Boutique',
         link: 'MyStore',
         icon: 'ri-store-2-fill',
         isAIcon: 'ri-store-2-fill',
         actived: false,
      },

      {
         name: 'Profile',
         link: 'MyProfile',
         icon: 'ri-user-fill',
         isAIcon: 'ri-user-fill',
         actived: false,
      },
   ]);

   // Donnee du menu Header
   const MenuHeaders = reactive([
      {
         name: 'Produits',
         link: 'Home',
         actived: true,
      },
      {
         name: 'Boutiques',
         link: 'Store',
         actived: false,
      },
   ]);

   // Global
   const BASE_ACTIVED = (MENU) => {
      MENU.forEach((M) => {
         M.actived = false;
         if (M.link === route.name) {
            M.actived = true;
         }
      });
   };

   // Activation du menu courant!
   const MenuHeaderActived = computed(() => {
      BASE_ACTIVED(MenuHeaders);
   });

   // Activation du menu courant!
   const MenuFooterActived = computed(() => {
      BASE_ACTIVED(MenuFooter);
   });

   return { MenuFooter, MenuHeaders, MenuHeaderActived, MenuFooterActived };
};
