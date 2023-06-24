const BASE_URL = 'https://celchap-api.phylosanitas.com/api';

export const URL = {
   AUTH_SIGNUP: `${BASE_URL}/register`,
   AUTH_SIGIN: `${BASE_URL}/login`,
   Auth_CREATE_STORE: `${BASE_URL}/boutique/store`,

   // Products
   PRODUCTS: `${BASE_URL}/site/produit`,
   PRODUCTS_NEW: `${BASE_URL}/site/produit?produit=produit_jour`,
   PRODUCTS_STORE_SIMPLE: `${BASE_URL}/produit/store`,
   PRODUCTS_DETAIL: `${BASE_URL}/produit/detail`, 


   // Store
   STORE: `${BASE_URL}/boutique/index`,
   STORE_ALL: `${BASE_URL}/site/liste-boutique`,
   STORE_ONE: `${BASE_URL}/site/boutique`,

   // Category
   CATEGORY: `${BASE_URL}/categorie/index`,
};
