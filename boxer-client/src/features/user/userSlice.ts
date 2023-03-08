import { updateActionObjectToState } from '../../common/utils'
import { createAction, createSlice } from '@reduxjs/toolkit'
import { GET_USER }                  from '../../constants/actionTypes'
import { AppDispatch }               from '../../app/store'



/**
 * Define auth input type
 * */
export interface IUserAction {
    type: string,
    payload: IUserInitialState,
}


export interface IUserInitialState {
    name: string,
    email: string,
    error?: Error
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
        [ GetUserAction.type ]: GetUserReducerCase,
    },
    extraReducers: ( builder ) => {
        builder
            .addMatcher(
                ( action ) => action.type.startsWith('user'),
                ( state, action ) => {
                    console.log('userSlice addMatcher', action)
                }
            )
            .addDefaultCase(( state, action ) => state)
    },
})

export const userDispatch = (dispatch: AppDispatch) => {
    return {
        GET_USER: ( payload: any ) => dispatch(userActions.GET_USER(payload)),

    }
}


export const userActions = userSlice.actions
export default userSlice.reducer