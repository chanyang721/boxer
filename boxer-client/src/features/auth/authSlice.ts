import { createReducer, updateActionObjectToState, updateItemInArray } from '../../common/utils'



/**
 * Define auth input type
 * */
export interface authActionType {
    type: string,
    payload: authInitialStateType
}

export interface authInitialStateType {
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
export const reducerCaseRegister = ( authState: authInitialStateType, action: any ) => {
    // return updateItemInArray(authState, action.type, ( auth: authInitialStateType ) => {
        return updateActionObjectToState(authState, action)
    // })
}

export const reducerCaseLogin = ( authState: authInitialStateType, action: authActionType ) => {
    return updateItemInArray(authState, action.type, ( auth: authInitialStateType ) => {
        return updateActionObjectToState(auth, action)
    })
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
export const authInitialState: authInitialStateType = {
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