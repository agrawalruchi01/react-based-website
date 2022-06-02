
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPE , Category} from "./category.types"

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>;
export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, Error>;

export type CategoryAction =  FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher(() : FetchCategoriesStart => {
    return createAction( CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);
})

export const fetchCategoriesSuccess =  withMatcher((categories: Category[]) : FetchCategoriesSuccess => {
    return createAction( CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,  categories);
})

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed => {
    return createAction( CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,  error);
})

// export const fetchCategoriesAsync = () => async(dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//         const categoryArray  = await getCategoriesAndDocuments();
//         dispatch(fetchCategoriesSuccess(categoryArray));
//     } catch (error) {
//         dispatch(fetchCategoriesFailed(error));
//     }
// }