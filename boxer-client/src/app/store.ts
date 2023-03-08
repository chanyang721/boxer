import { PROD }           from '../constants/actionTypes'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer }    from './rootReducer'
import logger             from 'redux-logger'
import { authDispatch }   from '../features/auth/authSlice'
import { userDispatch }   from '../features/user/userSlice'
import { viewerDispatch } from '../features/viewer/viewerSlice'



export const store = configureStore({
    reducer   : rootReducer,
    middleware: [ logger ],
    // devTools  : process.env.NODE_ENV !== PROD,
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
            auth: authDispatch(dispatch),
            user: userDispatch(dispatch),
            viewer: viewerDispatch(dispatch)
        },
    }
}