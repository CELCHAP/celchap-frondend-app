
import axios from 'axios';



export const getAllCategories = async () => {
    try {
       const { data } = await axios.get(URL.CATEGORY);
       if(data){
          return data.categorie
       }
    } catch (error) {
       console.log(error);
    }
 };

