import { LOGIN, PROD, REGISTER } from '../constants/actionTypes'
import { configureStore }        from '@reduxjs/toolkit'
import { rootReducer }    from './rootReducer'
import logger             from 'redux-logger'



export const store = configureStore({
    reducer   : rootReducer,
    middleware: [ logger ],
    devTools  : process.env.NODE_ENV !== PROD,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
console.log(store.getState())


export const mapStateToProps = (state: any) => {
    return {
        auth: state.auth,
        user: state.user,
    }
}

export const mapDispatchProps = (dispatch: AppDispatch) => {
    return {
        register: (payload: any) => dispatch({ type: REGISTER, payload }),
        login: (payload: any) => dispatch({ type: LOGIN, payload }),
    }
}