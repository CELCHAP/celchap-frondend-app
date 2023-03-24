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
         icon: 'fi fi-bs-home',
         isAIcon: 'fi fi-sr-home',
         actived: true,
      },
      {
         name: 'Recherche',
         link: 'Search',
         icon: 'fi fi-bs-search',
         isAIcon: 'fi fi-sr-search',
         actived: false,
      },
      {
         name: 'Panier',
         link: 'Basket',
         icon: 'fi fi-bs-shopping-cart',
         isAIcon: 'fi fi-sr-shopping-cart',
         actived: false,
      },
      {
         name: 'Boutique',
         link: 'MyStore',
         icon: 'fi fi-bs-shop',
         isAIcon: 'fi fi-sr-shop',
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
