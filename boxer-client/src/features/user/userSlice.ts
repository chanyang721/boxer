import { updateActionObjectToState }   from '../../common/utils'
import { createAction, createReducer } from '@reduxjs/toolkit'
import { GET_USER }                    from '../../constants/actionTypes'



/**
 * Define auth input type
 * */
export interface IUserAction {
    type: string,
    payload: IUserInitialState
}

export interface IUserInitialState {
    name: string,
    email: string,
}


/**
 * Create Actions
 * */
export const GET_USER_ACTION = createAction<IUserInitialState>(GET_USER)

/**
 * Create Reducer Case
 * */
export const reducerCaseGetUser = ( authState: IUserInitialState, action: IUserAction ) => {
    return updateActionObjectToState(authState, action.payload)
}

/**
 * User Initial State
 * */
export const userInitialState: IUserInitialState = {
    email: '',
    name : 'Chanyang Lee',
}

/**
 * Create User Reducer with @reduxjs/toolkit
 * */
export const userReducer = createReducer(userInitialState, {
    [ GET_USER_ACTION.type ]: reducerCaseGetUser,

})