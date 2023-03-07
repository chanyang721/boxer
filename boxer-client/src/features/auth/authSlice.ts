import { createReducer, updateActionObjectToState, updateItemInArray } from '../../common/utils'



/**
 * Define auth input type
 * */
export interface IAuthAction {
    type: string,
    payload: IAuthInitialState
}

export interface IAuthInitialState {
    token: {
        access: string, refresh: string,
    },
    firebase: {
        idToken: string, uid: string,
    },
    isAuthenticated: boolean,
}


/**
 * Reducer Case with action functions
 * */
export const reducerCaseRegister = ( authState: IAuthInitialState, action: IAuthAction ) => {
    return updateActionObjectToState(authState, action.payload)
}

export const reducerCaseLogin = ( authState: IAuthInitialState, action: IAuthAction ) => {
    return updateActionObjectToState(authState, action.payload)
}

/**
 * Mapping handler of action types to reducer cases
 * ActionType: ReducerCase
 * */
export const AuthHandlers = {
    REGISTER: reducerCaseRegister,
    LOGIN   : reducerCaseLogin,
}

/**
 * Auth Initial State
 * */
export const authInitialState: IAuthInitialState = {
    token           : {
        access : '',
        refresh: '',
    },
    firebase       : {
        idToken: '',
        uid    : '',
    },
    isAuthenticated: false,
}

/**
 * Create Auth Reducer with @reduxjs/toolkit
 * */
export const authReducer = createReducer(authInitialState, AuthHandlers)