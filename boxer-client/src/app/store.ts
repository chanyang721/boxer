import { PROD }           from '../constants/actionTypes'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer }    from './rootReducer'
import logger             from 'redux-logger'
import { acthActions }    from '../features/auth/authSlice'
import { userActions }    from '../features/user/userSlice'



export const store = configureStore({
    reducer   : rootReducer,
    middleware: [ logger ],
    devTools  : process.env.NODE_ENV !== PROD,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
console.log(store.getState())

export const mapStateToProps = ( state: any ) => {
    return {
        state: { ...state },
    }
}

export const mapDispatchProps = ( dispatch: AppDispatch ) => {
    return {
        dispatch: {
            auth: {
                REGISTER: ( payload: any ) => dispatch(acthActions.REGISTER(payload)),
                LOGIN   : ( payload: any ) => dispatch(acthActions.LOGIN(payload)),
            },
            user: {
                GET_USER: ( payload: any ) => dispatch(userActions.GET_USER(payload)),
            },
        },
    }
}