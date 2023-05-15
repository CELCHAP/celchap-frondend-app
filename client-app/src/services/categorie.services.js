
import axios from 'axios';
import { URL } from './../router/url';



export const getAllCategories = async () => {
    try {
       const { data } = await axios.get(URL.CATEGORY);
       if(data){
          return {
            data: data.categorie,
            error: null
          }
       }
    } catch (error) {
      return {
         data: null,
         error: error
       }
    }
 };

