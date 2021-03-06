
import {AdditionalInformation, UserData} from '../../utils/firebase/firebase.utils';
import {Action, ActionWithPayload, createAction, withMatcher} from '../../utils/reducer/reducer.utils'

import {USER_ACTION_TYPES} from './user.types';


export type SetCurrentUser =
    ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email: string, password: string}>;
export type EmailSignInFailed =
    ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;
export type EmailSignInSuccess =
    ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;
export type SignUpStart = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_UP_START,
    {email: string, password: string, displayName: string}>

export type SignUpSuccess = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    {user: UserData, additionalDetails: AdditionalInformation}>

export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>
export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>

export const setCurrentUser = withMatcher(
    (user: UserData): SetCurrentUser => {
        return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)})

export const checkUserSesson = withMatcher(():
    CheckUserSession => {
      return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
    })

export const emailSignInStart = withMatcher((email: string, password: string):
    EmailSignInStart => {
      return createAction(
          USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password})
    })

export const googleSignInStart = withMatcher(():
    GoogleSignInStart => {
      return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
    })

export const signInSuccess = withMatcher((user: UserData):
    EmailSignInSuccess => {
      return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
    })

export const signInFailed = withMatcher((error: Error):
    EmailSignInFailed => {
      return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
    })

export const signUpStart =
    withMatcher((email:string, password:string, displayName:string) : SignUpStart => {
      console.log('email start', email);
      return createAction(
          USER_ACTION_TYPES.SIGN_UP_START, {email, password, displayName})
    })


export const signUpSuccess =
    withMatcher((user: UserData, additionalDetails: AdditionalInformation) : SignUpSuccess=> {
      return createAction(
          USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails});
    })

export const signUpFailed =
    withMatcher((error: Error) : SignUpFailed => {
      return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
    })

export const signOutStart =
   withMatcher( () : SignOutStart => {
      return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
    })

export const signOutSuccess =
    withMatcher(() : SignOutSuccess=> {
      return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
    })

export const signOutFailed = withMatcher((error: Error) : SignOutFailed=> {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
})