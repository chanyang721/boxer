import { createReducer } from '../../common/utils'



export const userInitialState = {
    user: {
        id      : '',
        email   : '',
        username: '',
    },
}


export const userHandlers = {

}

export const userReducer = createReducer(userInitialState, userHandlers)