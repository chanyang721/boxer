import { LOGIN, REGISTER } from '../../constants/action.types'



export const register = ( payload: any ) => ( {
    type: REGISTER,
    payload,
} )

export const login = ( payload: any ) => ( {
    type: LOGIN,
    payload,
} )
