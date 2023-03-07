import { updateActionObjectToState }   from '../../common/utils'
import { createAction, createReducer } from '@reduxjs/toolkit'
import { LOGIN, REGISTER }             from '../../constants/actionTypes'


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
 * Action Create functions
 * */
export const REGISTER_ACTION = createAction<IAuthInitialState>(REGISTER)
export const LOGIN_ACTION = createAction<IAuthInitialState>(LOGIN)

/**
 * Reducer Case
 * */
export const reducerCaseRegister = ( authState: IAuthInitialState, action: IAuthAction ) => {
    return updateActionObjectToState(authState, action.payload)
}

export const reducerCaseLogin = ( authState: IAuthInitialState, action: IAuthAction ) => {
    return updateActionObjectToState(authState, action.payload)
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
export const authReducer = createReducer(authInitialState, ( builder ) => {
    builder
        .addCase(REGISTER_ACTION, reducerCaseRegister)
        .addCase(LOGIN_ACTION, reducerCaseLogin)

        .addMatcher(
            ( action ) => action.type.startsWith('test'),
            ( state, action ) => {
                console.log('action.type.startsWith(\'test/\')')
            }
        )
        .addDefaultCase(( state, action ) => {})
})