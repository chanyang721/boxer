import { createReducer, updateItemInArray, updateActionObjectToState } from '../../common/utils'

// export const register = ( payload: any ) => ( {
//     type: REGISTER,
//     payload,
// } )
//
// export const login = ( payload: any ) => ( {
//     type: LOGIN,
//     payload,
// } )

export const reducerCaseRegister = ( authState: any, action: any ) => {
    return updateItemInArray(authState, action.id, ( auth: any ) => {
        return updateActionObjectToState(auth, { auth: action.auth })
    })
}

export const reducerCaseLogin = ( authState: any, action: any ) => {
    return updateItemInArray(authState, action.id, ( auth: any ) => {
        return updateActionObjectToState(auth, { auth: action.auth })
    })
}

export const AuthHandlers = {
    // Action Type: Reducer Case
    REGISTER: reducerCaseRegister,
    LOGIN   : reducerCaseLogin,

}

export const authInitialState = {
    token          : {
        access : '',
        refresh: '',
    },
    firebase       : {
        idToken: '',
        uid    : '',
    },
    isAuthenticated: false,
}
export const authReducer = createReducer(authInitialState, AuthHandlers)