import axios from 'axios';
import { URL } from './../router/url';

export const AuthValidation = async (sign_data) => {
   const inputError = {
      path: '',
      message: '',
   };
   const err = false;

   if (sign_data.store) {
      inputError = {
         path: '',
         message: '',
      };
      return err;
   }
};

export const Sigup = async (sign_data) => {
   try {
      const { data } = await axios.post(URL.AUTH_SIGNUP, sign_data);
      if (data) {
         return {
            data: data,
            error: null,
         };
      }
   } catch (error) {

      return {
         data: null,
         error: {
            path: Object.keys(error.response.data.errors)[0],
            message: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0]
         },
      };
   }
};


export const SignStore = async (store_data) => {
   try {
      const { data } = await axios.post(URL.Auth_CREATE_STORE, store_data);
      if (data) {
         return {
            data: data,
            error: null,
         };
      }
   } catch (error) {

      return {
         data: null,
         error: {
            path: Object.keys(error.response.data.errors)[0],
            message: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0]
         },
      };
   }
};
