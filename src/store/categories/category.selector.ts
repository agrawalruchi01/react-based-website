import {createSelector} from "reselect";
import { RootState } from "../store";
import { CategoriesState } from "./category.reducer";
import { CategoryMap} from "./category.types";

const selectCategoryReducer = (state: RootState) : CategoriesState =>{ console.log(state); return state.categories};

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories 
)


export const selectCategoriesMap = createSelector([selectCategoryReducer], (categories) : CategoryMap=> 
 {return categories.categories && categories.categories.reduce((acc, category)=>{
       const {title, items} = category;
       acc[title.toLowerCase()] = items;
       return acc;
   }, {} as CategoryMap)});

export const selectCategoriesIsloading = createSelector([selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading)