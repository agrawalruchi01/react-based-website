import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPE } from "./category.types"

export const fetchCategoriesStart = () => {
    return createAction( CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);
}
export const fetchCategoriesSuccess = (categories) => {
    return createAction( CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,  categories);
}
export const fetchCategoriesFailed = (error) => {
    return createAction( CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,  error);
}

export const fetchCategoriesAsync = () => async(dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoryArray  = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoryArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
}