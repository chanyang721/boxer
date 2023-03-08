import { updateActionObjectToState }                                     from '../../common/utils'
import { createAction, createEntityAdapter, createReducer, createSlice } from '@reduxjs/toolkit'
import { LOGIN, REGISTER }                                               from '../../constants/actionTypes'


/**
 * Define auth input type
 * */
export interface IAuthAction {
    type: string,
    payload: IAuthInitialState,
    error?: Error
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
}


/**
 * Action Create functions
 * */
export const RegisterAction = createAction<IAuthInitialState>(REGISTER)
export const LoginAction = createAction<IAuthInitialState>(LOGIN)


/**
 * Reducer Case
 * */
//TODO action Interface 재설정
export const RegisterReducerCase = ( authState: IAuthInitialState, action: IAuthAction ) => {
    return updateActionObjectToState(authState, action.payload)
}

export const LoginReducerCase = ( authState: IAuthInitialState, action: IAuthAction ) => {
    return updateActionObjectToState(authState, action.payload)
}


/**
 * Auth Initial State
 * */
// export const authInitialState: IAuthInitialState = {
//     token           : {
//         access : '',
//         refresh: '',
//     },
//     firebase       : {
//         idToken: '',
//         uid    : '',
//     },
//     isAuthenticated: false,
// }

/**
 * Create Auth Reducer with @reduxjs/toolkit
 * */
// export const authReducer = createReducer(authInitialState, ( builder ) => {
//     builder
//         .addCase(RegisterAction, RegisterReducerCase)
//         .addCase(LoginAction, LoginReducerCase)
//
//         .addMatcher(
//             ( action ) => action.type.startsWith('test'),
//             ( state, action ) => {
//                 console.log('action.type.startsWith(\'test/\')')
//             }
//         )
//         .addDefaultCase(( state, action ) => {})
// })



/////////////////////////////////////////////////////
const authAdapter = createEntityAdapter()
const authInitialState = authAdapter.getInitialState({
    token           : {
        access : '',
        refresh: '',
    },
    firebase       : {
        idToken: '',
        uid    : '',
    },
    isAuthenticated: false,
    status: 'idle'
} as IAuthInitialState)

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        [ RegisterAction.type ]: RegisterReducerCase,
        [ LoginAction.type ]: LoginReducerCase,
    },
    extraReducers: (builder) => {
        builder
            // .addCase(fetchAuth.pending, (state, action) => {
            //     state.status = 'loading'
            // })
            // .addCase(fetchAuth.fulfilled, (state, action) => {
            //     authAdapter.setAll(state, action.payload)
            //     state.status = 'idle'
            // })
            // .addCase(saveNewTodo.fulfilled, authAdapter.addOne)
            .addMatcher(
                ( action ) => action.type.startsWith('test'),
                ( state, action ) => {
                    console.log('action.type.startsWith(\'test/\')')
                }
            )
            .addDefaultCase(( state, action ) => state)
    }
})

export const actions = authSlice.actions
export default authSlice.reducer