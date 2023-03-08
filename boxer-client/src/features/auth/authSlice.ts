import { updateActionObjectToState } from '../../common/utils'
import { createAction, createSlice } from '@reduxjs/toolkit'
import { LOGIN, REGISTER }           from '../../constants/actionTypes'
import { AppDispatch }               from '../../app/store'



/**
 * Define auth input type
 * */
export interface IAuthAction {
    type: string,
    payload: IAuthInitialState,
}


export interface IAuthInitialState {
    token: {
        access: string, refresh: string,
    },
    firebase: {
        idToken: string, uid: string,
    },
    isAuthenticated: boolean,
    status: string
    error?: Error
}


/**
 * Action Create functions
 * */
export const RegisterAction = createAction<IAuthInitialState>(REGISTER)
export const LoginAction = createAction<IAuthInitialState>(LOGIN)


/**
 * Reducer Case
 * */
const RegisterReducerCase = ( state: IAuthInitialState, action: IAuthAction ) => {
    return updateActionObjectToState(state, action.payload)
}
const LoginReducerCase = ( state: IAuthInitialState, action: IAuthAction ) => {
    return updateActionObjectToState(state, action.payload)
}

/**
 * Create Auth Slice with @reduxjs/toolkit
 * */
const authInitialState: IAuthInitialState = {
    token          : {
        access : '',
        refresh: '',
    },
    firebase       : {
        idToken: '',
        uid    : '',
    },
    isAuthenticated: false,
    status         : 'idle',
}

const authSlice = createSlice({
    name         : 'auth',
    initialState : authInitialState,
    reducers     : {
        [ RegisterAction.type ]: RegisterReducerCase,
        [ LoginAction.type ]   : LoginReducerCase,
    },
    extraReducers: ( builder ) => {
        builder
            .addMatcher(( action ) => action.type.startsWith('test'), ( state, action ) => {
                console.log('action.type.startsWith(\'test/\')')
            })
            .addDefaultCase(( state, action ) => state)
    },
})

export const authDispatch = (dispatch: AppDispatch) => {
    return {
        REGISTER: ( payload: any ) => dispatch(acthActions.REGISTER(payload)),
        LOGIN   : ( payload: any ) => dispatch(acthActions.LOGIN(payload)),
    }
}

export const acthActions = authSlice.actions
export default authSlice.reducer