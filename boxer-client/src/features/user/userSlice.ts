import { updateActionObjectToState } from '../../common/utils'
import { createAction, createSlice } from '@reduxjs/toolkit'
import { GET_USER }                  from '../../constants/actionTypes'



/**
 * Define auth input type
 * */
export interface IUserAction {
    type: string,
    payload: IUserInitialState,
    error?: Error
}


export interface IUserInitialState {
    name: string,
    email: string,
}


/**
 * Create Actions
 * */
export const GetUserAction = createAction<IUserInitialState>(GET_USER)

/**
 * Create Reducer Case
 * */
export const GetUserReducerCase = ( authState: IUserInitialState, action: IUserAction ) => {
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
 * Create User Slice with @reduxjs/toolkit
 * */
const userSlice = createSlice({
    name         : 'user',
    initialState : userInitialState,
    reducers     : {
        // [ GetUserAction.type ]: GetUserReducerCase,
        GET_USER: GetUserReducerCase,
    },
    extraReducers: ( builder ) => {
        builder
            // .addMatcher()
            .addDefaultCase(( state, action ) => state)
    },
})

export const userActions = userSlice.actions
export default userSlice.reducer