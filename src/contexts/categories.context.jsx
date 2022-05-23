import { createContext, useEffect,useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
    products: [],
    setProducts: ()=>{}
});


export const CategoriesProvider = ({children}) => {
//  useEffect(() => {
//      addCollectionAndDocument('categories', SHOP_DATA);
//  }, []);
const [categoriesMap, setCategoriesMap] = useState({});

 useEffect(() => {
    const getCategoriesMap = async () => {
        const categoryMap  = await getCategoriesAndDocuments();
        console.log(categoryMap);
        setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
 }, []);


 const value ={categoriesMap};
  return (
      <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}

