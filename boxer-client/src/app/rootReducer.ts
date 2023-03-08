import { combineReducers } from 'redux'
import authReducer         from '../features/auth/authSlice'
import userReducer         from '../features/user/userSlice'
import viewerReducer       from '../features/viewer/viewerSlice'


export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    viewer: viewerReducer,
})