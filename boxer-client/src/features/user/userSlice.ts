import { createReducer, updateActionObjectToState } from '../../common/utils'



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
 * Reducer Case with action functions
 * */
export const reducerCaseGETUser = ( authState: IUserInitialState, action: IUserAction ) => {
    // return updateItemInArray(authState, action.type, ( auth: IUserInitialState ) => {
    return updateActionObjectToState(authState, action.payload)
    // })
}

/**
 * Mapping handler of action types to reducer cases
 * ActionType: ReducerCase
 * */
export const userHandlers = {
    GET_USER: reducerCaseGETUser,
}

/**
 * User Initial State
 * */
export const userInitialState = {
    email: '',
    name : 'Chanyang Lee',
}

/**
 * Create User Reducer with @reduxjs/toolkit
 * */
export const userReducer = createReducer(userInitialState, userHandlers)