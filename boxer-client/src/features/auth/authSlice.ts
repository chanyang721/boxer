import { LOGIN, REGISTER } from '../../constants/action.types'
import { createReducer, updateItemInArray, updateObject } from '../../common/utils'



export const register = ( payload: any ) => ( {
    type: REGISTER,
    payload,
} )

export const login = ( payload: any ) => ( {
    type: LOGIN,
    payload,
} )

export const authInitialState = {
    token          : {
        access : '',
        refresh: '',
    },
    isAuthenticated: false,
}

export const ReducerCaseRegister = ( todosState: any, action: any ) => {
    return updateItemInArray(todosState, action.id, ( todo: any ) => {
        return updateObject(todo, { text: action.text })
    })
}

export const AuthHandlers = {
    // Action Type: Reducer Case
    REGISTER: ReducerCaseRegister,

}

export const authReducer = createReducer(authInitialState, AuthHandlers)
