import {createSelector} from "reselect";

const selectCategoryReducer = (state) =>{ console.log(state); return state.categories};

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories 
)


export const selectCategoriesMap = createSelector([selectCategoryReducer], (categories) => {return categories.categories.reduce((acc, category)=>{
       const {title, items} = category;
       acc[title.toLowerCase()] = items;
       return acc;
   }, {})});