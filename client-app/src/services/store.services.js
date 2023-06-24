import { ref } from 'vue';
import axios from 'axios';
import { URL } from '../router/url';

export const getAllStore = async () => {
   try {
      const { data } = await axios.get(URL.STORE_ALL);
      if (data) {
         return {
            data: data,
            error: null,
         };
      }
   } catch (error) {
      return {
         data: null,
         error: true,
      };
   }
};

export const getStore = async () => {
   try {
      const { data } = await axios.get(URL.STORE);
      if (data) {
         return {
            data: data,
            error: null,
         };
      }
   } catch (error) {
      return {
         data: null,

         error: true,
      };
   }
};
