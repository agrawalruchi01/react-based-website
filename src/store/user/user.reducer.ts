
import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";
import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed } from "./user.action";

export type UserState = {
    currentUser: UserData | null;
    isLoading: false;
    error: Error | null;
}
const INITIAL_STATE : UserState = {
    currentUser: null,
    isLoading: false,
    error: null,

}

export const userReducer = (state = INITIAL_STATE, action: AnyAction): UserState => {
    if (signInSuccess.match(action)) {
        return {...state,currentUser: action.payload, isLoading:false}
    }

    if (signOutSuccess.match(action)) {
        return {...state,currentUser:null, isLoading:false}
    }

    if (signOutFailed.match(action) || signUpFailed.match(action) || signInFailed.match(action)) {
        return {...state, error:action.payload}
    }

    return state;

}